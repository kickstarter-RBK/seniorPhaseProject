import React from "react";

class Copyright extends React.Component {
  render() {
    return (
      <div id="thirdDiv">
        <div id="formsSection2">
          <form action="/remember_currency" method="post">
            <input
              type="hidden"
              name="authenticity_token"
              value="GSW7THY3Z/r+jAK3iZFgZOm7H1zXYlUMyf+XgeN04FG8S4IUtT+n1T001mwuKqKbW6UlOJZMMqQcGitjghw+hQ=="
            />
            <select name="currency">
              <option value="EUR">€ Euro (EUR)</option>
              <option value="AUD">$ Australian Dollar (AUD)</option>
              <option value="CAD">$ Canadian Dollar (CAD)</option>
              <option value="CHF">Fr Swiss Franc (CHF)</option>
              <option value="DKK">kr Danish Krone (DKK)</option>
              <option value="GBP">£ Pound Sterling (GBP)</option>
              <option value="HKD">$ Hong Kong Dollar (HKD)</option>
              <option value="JPY">¥ Japanese Yen (JPY)</option>
              <option value="MXN">$ Mexican Peso (MXN)</option>
              <option value="NOK">kr Norwegian Krone (NOK)</option>
              <option value="NZD">$ New Zealand Dollar (NZD)</option>
              <option value="SEK">kr Swedish Krona (SEK)</option>
              <option value="SGD">$ Singapore Dollar (SGD)</option>
              <option value="USD" defaultValue="">
                $ US Dollar (USD)
              </option>
            </select>
            <div class="select__arrow"></div>
          </form>
        </div>
        <div id="formsSection1">
          <form action="/remember_language" method="post">
            <input
              type="hidden"
              name="authenticity_token"
              value="GSW7THY3Z/r+jAK3iZFgZOm7H1zXYlUMyf+XgeN04FG8S4IUtT+n1T001mwuKqKbW6UlOJZMMqQcGitjghw+hQ=="
            />
            <select name="lang">
              <option value="en" defaultValue="">
                English
              </option>
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語</option>
              <option value="zh">繁體中文</option>
              <option value="emojilocale">😃 ❤️ 🔥</option>
            </select>
            <div class="select__arrow"></div>
          </form>
        </div>
        <section id="socialLinksSection">
          <ul>
            <li className="socialIcons">
              <a
                href="http://www.facebook.com/kickstarter"
                className="link-soft-black keyboard-focusable"
              >
                <img
                  className="icons"
                  src="https://image.flaticon.com/icons/svg/1384/1384005.svg"
                ></img>
              </a>
            </li>
            <li className="socialIcons">
              <a
                href="http://www.instagram.com/kickstarter"
                className="link-soft-black keyboard-focusable"
              >
                <img
                  className="icons"
                  src="https://image.flaticon.com/icons/svg/1077/1077042.svg"
                ></img>
              </a>
            </li>
            <li className="socialIcons">
              <a
                href="http://www.twitter.com/kickstarter"
                className="link-soft-black keyboard-focusable"
              >
                <img
                  className="icons"
                  src="https://image.flaticon.com/icons/svg/25/25660.svg"
                ></img>
              </a>
            </li>
            <li className="socialIcons">
              <a
                href="http://www.youtube.com/user/kickstarter"
                className="link-soft-black keyboard-focusable"
              >
                <img
                  className="icons"
                  src="https://image.flaticon.com/icons/svg/733/733646.svg"
                ></img>
              </a>
            </li>
          </ul>
        </section>
        <section id="copyrightSection">
          <div className="flex items-center mb3 mb0-lg">
            <span>
              {" "}
              <img
                id="copyrighticon"
                src="https://a.kickstarter.com/favicon.ico"
              ></img>{" "}
              Kickstarter, PBC © 2019
            </span>
          </div>
        </section>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Copyright;
