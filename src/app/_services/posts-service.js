import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../_utils/firebase";

//add Post

export const addFeedPost = async (userId, content) => {
    try {
        await addDoc(collection(db, `users/${userId}/posts`), {
            content,
            createdAt: serverTimestamp(),
            likes: 0,
        });
        console.log("Post created successfully!");
    } catch (error) {
        console.error("Error creating post: ", error);
    }
};

//Get Posts
export const getFeedPosts = async (userId) => {
    try {
        const postCollectionRef = collection(db, `users/${userId}/posts`);
        const postSnapshot = await getDocs(postCollectionRef);
        const mappedPosts = postSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return mappedPosts;
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
};

//Get Post
export const getFeedPost = async (userId, postId) => {
    try {
        const postDocRef = doc(db, `users/${userId}/posts`, postId);
        const postSnapshot = await getDoc(postDocRef);
        
        if (postSnapshot.exists()) {
            const postData = {
                id: postSnapshot.id,
                ...postSnapshot.data(),
            };
            return postData;
        } else {
            return null;
        }

    } catch (error) {
        console.error("Error getting document: ", error);
    }
};

