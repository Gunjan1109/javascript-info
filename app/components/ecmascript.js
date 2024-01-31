import Image from "next/image";

const EcmaScript = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            EcmaScript
          </h1>
          <p className="mb-8 leading-relaxed">
            ECMAScript is a standard for scripting
            languages, including JavaScript, JScript, and ActionScript. It is
            best known as a JavaScript standard intended to ensure the
            interoperability of web pages across different web browsers. It
            is standardized by Ecma International in the document ECMA-262.
            ECMAScript is commonly used for client-side scripting on the World
            Wide Web, and it is increasingly being used for server-side
            applications and services using runtime environments - Node.js,
            deno and bun.
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

export default EcmaScript;
