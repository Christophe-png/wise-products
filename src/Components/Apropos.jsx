import React from "react";
import "./Apropos.css";

function Apropos() {
  return (
    <div className="apropos">
      <div className="manifeste">
        <h1>Manifeste</h1>
        <h2>Dawa Sherpa: Ambassadeur Wise</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3m1EHk-5YN8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          L'empreinte de nos pas Nous nous sentons chanceux de pouvoir encore
          parcourir des espaces naturels préservés, où la nature exprime son
          plein potentiel. - Nous défendons un idéal où l'homme relève les yeux
          sur le monde qui l'entoure et reprend conscience de la place qu'il
          occupe. - Nous avons tous en nous le potentiel de rendre les choses
          meilleures où qu'on aille.
        </p>
      </div>
      <div className="histoire">
        <h1>Histoire</h1>
        <h2>La seule empreinte que tu laisses, c'est celle de tes pas !"</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fPpfGr6pINg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="recit-histoire">
          <p>
            DEUX TRAILEURS PASSIONNÉS 🏃‍♀🏃 Nous sommes Axelle et Guillaume,
            deux passionnés de trail running. L'idée de ce projet a germée en
            juin 2019 alors que nous cherchions à nous équiper de manière plus
            responsable. Ne trouvant pas notre bonheur et rêvant depuis
            longtemps de consacrer une part encore plus importante de notre vie
            au trail running, nous avons sauté le pas, quitté nos jobs, parcouru
            la France à la recherche de partenaires, fait une campagne de
            financement participatif et tada... Wise est né !
          </p>
        </div>
        <div className="photoDuo">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/5526/0732/files/Test_photo_Axelle_Guillaime_1200x.png?v=1608025253"
            alt="photo fondateurs Wise"
          />
        </div>
      </div>
    </div>
  );
}

export default Apropos;
