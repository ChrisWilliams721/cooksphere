import React from "react";
import Image from "next/image";

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/*USER*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-medium">Username</span>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
      {/*DESC*/}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
        <Image
            src="/pancakes.png"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
            Recipe for fluffy pancakes:
            1 cup all-purpose flour
            2 tablespoons sugar
            2 teaspoons baking powder
            1/4 teaspoon salt
            1 cup milk
            1 large egg
            2 tablespoons butter, melted
            1 teaspoon vanilla extract
        </p>
      </div>
      {/*INTERACTION*/}
      <div className=""></div>
    </div>
  );
}

export default Post;
