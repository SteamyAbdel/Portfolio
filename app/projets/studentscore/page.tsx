"use client";

import Head from "next/head";

const StudentScore = () => {
  const openPDF = () => {
    window.open("/student/cahier.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Deuxième projet de groupe (StudentScore)
        </h1>
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Présentation et objectif :
          </h3>
          <p className="mb-4 text-white">
            Nous travaillons dans une ESN. Pour un de nos clients, la société va
            réaliser une application mobile destinée aux élèves afin qu&apos;ils
            puissent gérer leur calendrier de devoirs ainsi que leurs notes
            obtenues aux évaluations. Cette application vise à offrir une
            gestion efficace et intuitive des devoirs et des notes, facilitant
            ainsi l&apos;organisation scolaire des élèves. Il va falloir alors
            concevoir et développer une application mobile permettant aux élèves
            de gérer leurs devoirs et leurs notes, en assurant une organisation
            optimale des tâches scolaires et une visualisation claire de
            l&apos;évolution des performances académiques.
          </p>
          <h3 className="text-xl font-semibold text-white mb-4">
            Les fonctionnalités sont :
          </h3>
          <div className="p-2">
            <p>
              <strong className="mb-4 text-white">Gestion des devoirs:</strong>
            </p>
            <ul className="list-inside list-disc mb-4 text-white">
              <li>Ajout, modification et suppression des devoirs à faire.</li>
              <li>Catégorisation des devoirs par matière.</li>
              <li>
                Tri par matière: Possibilité de trier et filtrer les devoirs en
                fonction des matières.
              </li>
              <li>
                Vue d&apos;ensemble des devoirs à venir pour chaque matière.
              </li>
              <li>Ajout de dates d&apos;échéance pour chaque devoir.</li>
              <li>
                Attribution de priorités aux devoirs pour aider les élèves à
                hiérarchiser leurs tâches.
              </li>
            </ul>
            <p>
              <strong className="mb-4 text-white">Gestion des notes:</strong>
            </p>
            <ul className="list-inside list-disc mb-4 text-white">
              <li>Saisie des notes obtenues dans chaque matière.</li>
              <li>
                Visualisation de l&apos;évolution des notes au fil du temps.
              </li>
              <li>
                Système de calcul automatique des moyennes par matière et
                globalement.
              </li>
              <li>Affichage des moyennes dans un tableau de bord.</li>
            </ul>
            <p>
              <strong className="mb-4 text-white">
                Suivi des matières enseignées:
              </strong>
            </p>
            <ul className="list-inside list-disc mb-4 text-white">
              <li>
                Liste des matières enseignées avec la possibilité d&apos;ajouter
                de nouvelles matières.
              </li>
            </ul>
            <p>
              <strong className="mb-4 text-white">
                Motivation et récompenses:
              </strong>
            </p>
            <ul className="list-inside list-disc mb-4 text-white">
              <li>
                Système de récompenses virtuelles pour encourager les élèves à
                atteindre leurs objectifs académiques.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Caractéristiques et contraintes techniques:
            </h3>
            <div className="p-2">
              <p className="mb-4 text-white">
                L’application sera au format mobile et s’exécutera sur Android.
              </p>
              <p className="mb-4 text-white">
                Le développement se fera en utilisant Java.
              </p>
              <p className="mb-4 text-white">
                Les données seront stockées dans une base de données locale
                SQLite.
              </p>
            </div>
          </div>
          <button
            onClick={openPDF}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Cahier des charges
          </button>
          <img src="/student/1.png" alt="student 1" className="mb-4 max-w-lg" />
          <img src="/student/2.JPG" alt="student 2" className="mb-4 max-w-lg" />
          <button
            onClick={() =>
              window.open(
                "https://gitea.btssio-poitiers.fr/ANDROID_P3_TEAM/ANDROID_P3_NOTE",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Gitea
          </button>
        </section>
      </div>
    </>
  );
};

export default StudentScore;
