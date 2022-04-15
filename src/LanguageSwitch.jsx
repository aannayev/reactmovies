import React, { Link } from "react";

const LanguageSwitch = ({ language, location }) => {
  let languageList = { sr: "srpski", en: "English", el: "Ελληνικα" };

  let links = [];
  let pageName = location.pathname;

  if (pageName.includes("/el") || pageName.includes("/sr")) {
    pageName = pageName.split("/")[2];
    for (var key in languageList) {
      if (key !== language) {
        let languagePath = "";

        if (key !== "en") {
          languagePath = `/${key}/`;
        }

        let link = (
          <Link key={key} to={`${languagePath}${pageName}`}>
            {languageList[key]}
          </Link>
        );

        links.push(link);
      }
    }
  }
  return <div>{links}</div>;
};

export default LanguageSwitch;
