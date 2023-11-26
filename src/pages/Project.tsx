import { Link } from "react-router-dom";
import "./Projects.scss"

function Project() {
	return (
        <main id="project">
            
			<div className="img shadow">
				<img src="/alliance.jpg" alt="" />
            </div>
            
			<div className="header">
				<h1>Run'Zik</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
					lobortis enim sit arcu volutpat nullam orci et nunc. Nibh facilisis
					aliquet mauris diam. Donec arcu tincidunt scelerisque tincidunt
					convallis vitae. Tempus tempus rhoncus lacinia id. Massa nunc nibh
					viverra aliquet vitae, gravida vulputate. Pellentesque volutpat quam
					et nunc, elementum in scelerisque. Et pharetra blandit massa
					adipiscing interdum nibh amet. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Scelerisque lobortis enim sit arcu volutpat nullam
					orci et nunc. Nibh facilisis aliquet mauris diam. Donec arcu tincidunt
					scelerisque tincidunt convallis vitae. Tempus tempus rhoncus lacinia
					id. Massa nunc nibh viverra aliquet vitae, gravida vulputate.
					Pellentesque volutpat quam et nunc, elementum in scelerisque. Et
					pharetra blandit massa adipiscing interdum nibh amet.
				</p>
            </div>
            
            <div className="tools shadow">
                <h2 className="h2">Outils utilisés</h2>
                <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                </ul>
            </div>

            <div className="showcase">
            <div>
                    <h2>Recherche</h2>
                    <ul>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h2>Recherche</h2>
                    <ul>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h2>Recherche</h2>
                    <ul>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                        <li className="btn"><Link to="/">Moodboard</Link></li>
                    </ul>
                </div>
            </div>
		</main>
	);
}

export default Project;
