import Image from "next/image";

const Future = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Future of JavaScript
          </h1>
          <p className="mb-8 leading-relaxed">
            Since the European Computer Manufacturers Association (ECMA)
            established the year-based release cycle for ECMAScript, a
            standardized JavaScript specification, we haven’t seen a lot of new
            features coming to the language—just a few each year. This could be
            one of the reasons we saw an increase of adoption of languages that
            compile to ES5 like TypeScript or ReasonML, both bringing features
            to the language that are highly requested by the community. This is
            not new—JavaScript went through this process before (CoffeeScript)
            and, in the end, those features ended up being merged into the
            language standard itself, and that’s probably the future that we can
            expect for these new typed features, too.
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

export default Future;
