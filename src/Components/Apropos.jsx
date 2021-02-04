import React from "react";
import "./Apropos.css";

function Apropos() {
  return (
    <div className="apropos">
      <div className="manifeste">
        <h1>Manifeste</h1>
        <h2>Dawa Sherpa: Ambassadeur Wise</h2>
        <iframe
          src="https://www.youtube.com/embed/3m1EHk-5YN8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>L'empreinte de nos pas</h2>
        <ul>
          <li>
            Nous nous sentons chanceux de pouvoir encore parcourir des espaces
            naturels préservés, où la nature exprime son plein potentiel.
          </li>
          <li>
            Nous défendons un idéal où l'homme relève les yeux sur le monde qui
            l'entoure et reprend conscience de la place qu'il occupe.
          </li>
          <li>
            Nous avons tous en nous le potentiel de rendre les choses meilleures
            où qu'on aille.
          </li>
        </ul>
      </div>
      <div className="histoire">
        <h1>Histoire</h1>
        <h2>La seule empreinte que tu laisses, c'est celle de tes pas !"</h2>
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/fPpfGr6pINg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="recit-histoire">
          <h3>Deux Trailers passionnés 🏃‍♀🏃 </h3>
          <p>
            Nous sommes Axelle et Guillaume, deux passionnés de trail running.
          </p>
          <p>
            L'idée de ce projet a germée en juin 2019 alors que nous cherchions
            à nous équiper de manière plus responsable.
          </p>
          <p>
            Ne trouvant pas notre bonheur et rêvant depuis longtemps de
            consacrer une part encore plus importante de notre vie au trail
            running, nous avons sauté le pas, quitté nos jobs, parcouru la
            France à la recherche de partenaires, fait une campagne de
            financement participatif et tada... Wise est né!
          </p>
        </div>
        <div className="photoDuo">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/5526/0732/files/Test_photo_Axelle_Guillaime_1200x.png?v=1608025253"
            alt="photo fondateurs Wise"
          />
        </div>
      </div>
      <section className="savoir-faire">
        <h1>Made in France</h1>
        <h2>Rencontre avec Bernard De Buhren</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/QJpZAGKQnSE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Des tissus français</h3>
        <p>
          C'est au beau milieu de l'Ardèche, en 1839, que notre filature et
          tisseur fut créé !
        </p>
        <p>
          Rare tisserand encore présent en France, c'est grâce à leur proximité
          que nous pouvons sortir un short ou une jupe avec seulement 240 km au
          compteur.
        </p>
        <p>
          Pour ceux qui ont déjà pu constater la qualité, la finesse et la
          légèreté des tissus de nos bas, sachez que derrière cela se cache une
          technique unique au monde : la chaîne et trame bi-extensible. Un must
          pour la pratique du sport !
        </p>
        <p>
          C'est grâce à ce savoir faire unique qu'ils ont pu résister aux vagues
          de délocalisation !
        </p>
      </section>
    </div>
  );
}

export default Apropos;
