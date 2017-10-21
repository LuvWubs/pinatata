const React = require("react");
const axios = require("axios");

// Creating the Results component

class Instructions extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <div className="rainbow">
        <h1 >THE GIST</h1>
        <p>Multiplayer online community where you can make friends, fight other's pinata's for candy, steal candy, level up and gain prestige to become El JEFE </p>
        <h2 >CANDY-the $</h2>
        <h3>EARN</h3>
        <p>By Playing Games</p>
        <p>By Fighting other player's pinata's and Winning</p>
        <p>By Stealing from players that have gained the title of "greedy"</p>
        <h3>SPEND</h3>
        <p>Buy your Pinata gifts and food to raise HAPPINESS</p>
        <p>Give to gain SWEETNESS</p>
        <h3>FIGHT POWER</h3>
        <p>Helps you win fights to gain more candy</p>
        <h2 >HAPPINESS-your Pinata's energy</h2>
        <h3>EARN</h3>
        <p>By buying your pinata gifts, playing games with him and having friends in the community</p>
        <h3>LEVEL UP</h3>
        <p>The happier your pinata is the faster you will level up, which makes you more powerful and helps you win battles</p>
        <p>If your pinata is not happy you can level down</p>
        <h3>FIGHT POWER</h3>
        <p>If your pinata is not happy he will not fight for you and then you can not earn CANDY from fights</p>
        <p>Fights drain your pinata so be sure to do things to treat him afterwards</p>
        <h2 >SWEETNESS-your Karma</h2>
        <h3>EARN</h3>
        <p>By making friends in the community and by giving away candy</p>
        <h3>LOSE</h3>
        <p>By being too "greedy" if you always pick fights don't make friends and never give away CANDY to those in need</p>
        <p>Greediness opens you up to looters who are waiting for the notification that a "greedy" player is online</p>
        <p>By stealing</p>

        {/* <h1 className="rainbow">THE GIST</h1>
        <span className="rainbow">These are Instructions</span>
        <h2 className="rainbow">CANDY-the $</h2>
        <h2 className="rainbow">HAPPINESS-your Pinata's energy</h2>
        <h2 className="rainbow">SWEETNESS-you Karma</h2> */}
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Instructions;
