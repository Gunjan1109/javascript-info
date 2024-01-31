import Image from "next/image";

const History = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            History of JavaScript
          </h1>
          <p className="mb-8 leading-relaxed">
            Brendan Eich first developed JavaScript, a computer language, in
            about ten days in May 1995. The language, formerly known as Mocha,
            later modified to LiveScript, and is now known simply as JavaScript,
            was created to be used on the client-side of websites, enabling the
            addition of dynamic and interactive components to static HTML texts.
            JavaScript was initially implemented in Netscape Navigator, which
            was the most popular browser at the time. The language was quickly
            adopted by Microsoft for use in Internet Explorer. Due to its
            simplicity of usage and the fact that it was the only client-side
            scripting language available at the time, JavaScript quickly gained
            popularity among web developers. JavaScript gained popularity during
            the ensuing years and was used to develop a wide range of web
            applications, such as online games, dynamic menus, and form
            validation. ECMAScript 4, a new version of the language, was planned
            in 2002, however, it was ultimately abandoned because of conflicts
            among the various browser vendors.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://source.unsplash.com/random/720x600/?javascript"
            width={600}
            height={720}
          />
        </div>
      </div>
    </section>
  );
};

export default History;