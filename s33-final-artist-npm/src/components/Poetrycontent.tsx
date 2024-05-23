import React, { useEffect, useState } from "react";

const Poetrycontent: React.FC = () => {
  const [poet1Content, setPoet1Content] = useState("");
  const [poet2Content, setPoet2Content] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("/assets/poet1.txt").then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      }),
      fetch("/assets/poet2.txt").then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      }),
    ])
      .then(([text1, text2]) => {
        const formattedText1 = text1.replace(/\n/g, "<br />");
        const formattedText2 = text2.replace(/\n/g, "<br />");
        setPoet1Content(formattedText1);
        setPoet2Content(formattedText2);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching poet content:", error);
        setError("Error fetching poet content");
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full h-full text-black flex justify-center">
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg text-center">
        <h1>
          <br /> <br />{" "}
        </h1>
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-900">
          Poetry and Poet
        </h2>
        <h1>
          <br /> <br />{" "}
        </h1>

        <div className="mb-12">
          <h3 className="text-4xl font-semibold text-blue-700">The Skylark</h3>
          <h3 className="text-3xl font-semibold text-blue-700">John Clark</h3>

          {loading ? (
            <div className="text-lg text-red-800 text-center">Loading...</div>
          ) : error ? (
            <div className="text-lg text-red-800 text-center">{error}</div>
          ) : (
            <div
              className="text-lg text-red-800 text-center"
              dangerouslySetInnerHTML={{ __html: poet1Content }}
            />
          )}

          <div className="pt-8 text-base font-semibold leading-7 justify-center item-center">
            <p>
              <a
                href="https://www.poetryfoundation.org/poems/43950/the-skylark"
                className="text-blue-500"
                aria-label="Read the original poem on Poetry Foundation"
                target="_blank"
              >
                Read the original &rarr;
              </a>
            </p>

            <img
              className="w-full h-auto"
              src="./public/assets/picture1.png"
              alt="Nature related to the poem"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-4xl font-semibold text-blue-700">
            A Division of Gods
          </h3>
          <h3 className="text-2xl font-semibold text-blue-700">
            BY ARIANA BROWN
          </h3>

          {loading ? (
            <div className="text-lg text-red-800 text-center">Loading...</div>
          ) : error ? (
            <div className="text-lg text-red-800 text-center">{error}</div>
          ) : (
            <div
              className="text-lg text-red-800 text-center"
              dangerouslySetInnerHTML={{ __html: poet2Content }}
            />
          )}

          <div className="pt-8 text-base font-semibold leading-7 justify-center item-center">
            <p>
              <a
                href="https://www.poetryfoundation.org/poems/161185/a-division-of-gods"
                className="text-blue-500"
                aria-label="Read the original poem on Poetry Foundation"
                target="_blank"
              >
                Read the original &rarr;
              </a>
            </p>

            <img
              className="w-full h-auto"
              src="./public/assets/picture2.jpeg"
              alt="Nature related to the poem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poetrycontent;
