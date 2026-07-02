import "./App.css";

const version = "v1.0.0";

export default function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1>🚀 DevSecOps CI/CD Deployment Demo</h1>
        <p>
          Automated deployment pipeline using React, Docker, GitHub Actions,
          Docker Hub and AWS EC2.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>🟢 Application</h3>
          <p>Running</p>
        </div>

        <div className="card">
          <h3>🐳 Docker</h3>
          <p>Healthy</p>
        </div>

        <div className="card">
          <h3>☁️ AWS EC2</h3>
          <p>Online</p>
        </div>

        <div className="card">
          <h3>🔄 Pipeline</h3>
          <p>Successful</p>
        </div>
      </div>

      <div className="section">
        <h2>CI/CD Workflow</h2>

        <div className="pipeline">
          <div>👨‍💻 Developer</div>
          <span>→</span>
          <div>GitHub</div>
          <span>→</span>
          <div>GitHub Actions</div>
          <span>→</span>
          <div>Docker Hub</div>
          <span>→</span>
          <div>AWS EC2</div>
          <span>→</span>
          <div>🌐 Live</div>
        </div>
      </div>

      <div className="section">
        <h2>Technology Stack</h2>

        <div className="badges">
          <span>React</span>
          <span>TypeScript</span>
          <span>Docker</span>
          <span>GitHub Actions</span>
          <span>Docker Hub</span>
          <span>AWS EC2</span>
          <span>NGINX</span>
        </div>
      </div>

      <div className="info">
        <div>
          <strong>Version</strong>
          <p>{version}</p>
        </div>

        <div>
          <strong>Environment</strong>
          <p>Production</p>
        </div>

        <div>
          <strong>Container</strong>
          <p>devsecops-demo</p>
        </div>

        <div>
          <strong>Port</strong>
          <p>3001</p>
        </div>
      </div>

      <footer>
        <p>✅ Automated Build • ✅ Dockerized • ✅ Auto Deployment to AWS EC2</p>
      </footer>
    </div>
  );
}