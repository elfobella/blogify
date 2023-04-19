import { Blog } from "@prisma/client";
import React from "react";
import moment from "moment";
import Image from "next/image";

type BlogProps = {
  blog: Blog;
};

const Blog = ({ blog }: BlogProps) => {
  const { title, image, description, createdAt } = blog;

  return (
    <div className="flex pt-12">
      <div className="rounded-lg bg-secondary-200 p-5">
        {image && (
          <Image alt="Blog image" src={image} width={280} height={280} />
        )}
        <h1 className="text-lg font-semibold"> {title} </h1>
        <p>{description}</p>
        <span>{moment(createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default Blog;
