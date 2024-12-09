import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../_utils/firebase";

//add Post

export const addFeedPost = async (userId, content, createdAt) => { //Added
  try {
    await addDoc(collection(db, "posts"), {
      userId,
      content,
      createdAt: createdAt || serverTimestamp(),
    });
    console.log("Post created successfully!");
  } catch (error) {
    console.error("Error creating post: ", error);
  }
};

//Get Posts
export const getFeedPosts = async (userId) => {
  try {
    const postCollectionRef = collection(db, "posts");
    const postSnapshot = await getDocs(postCollectionRef);
    const mappedPosts = postSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    const filteredPosts = mappedPosts.filter((post) => post.userId === userId);
    return filteredPosts;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};
export const getAllPosts = async () => { //Added
  try {
    const postsRef = collection(db, "posts"); // Global posts collection
    const postSnapshot = await getDocs(postsRef);
    const mappedPosts = postSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return mappedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
export const deletePost = async (postId) => {
  try {
    await deleteDoc(doc(db, "posts", postId));
    console.log("Post deleted successfully!");
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
}
