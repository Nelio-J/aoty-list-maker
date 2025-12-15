"use client";
// import { useState } from "react";
import Search from "@/app/ui/search";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Create List',
// };

export default function Page() {

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Album Collage Builder</h1>

      <Search placeholder="Search for albums..." />

    </div>
  );
}
