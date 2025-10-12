import React from "react";

function Page404() {
  return (
    <div className="min-h-[80vh] flex flex-col gap-5 justify-center items-center">
     <h4 className="md:text-6xl text-3xl text-red-500 font-bold">
        404 Page Not Found
     </h4>
     <p>This page may be never exits</p>
    </div>
  );
}

export default Page404;
