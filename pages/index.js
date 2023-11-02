import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home(props) {
  const { exploreData, cardData } = props;

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pulling and mapping the explore data from the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((place, index) =>
              index === 1 || index === 5 ? (
                <SmallCard
                  key={index}
                  img="https://links.papareact.com/41m"
                  location={place.location}
                  distance={place.distance}
                />
              ) : (
                <SmallCard
                  key={index}
                  img={place.img}
                  location={place.location}
                  distance={place.distance}
                />
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((place, index) => (
              <MediumCard key={index} img={place.img} title={place.title} />
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
      (res) => res.json()
    );

    const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
      (res) => res.json()
    );

    return {
      props: {
        exploreData,
        cardData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        exploreData: null,
        cardData: null,
      },
    };
  }
}
