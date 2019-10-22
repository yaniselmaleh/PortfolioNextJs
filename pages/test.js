import '../sass/components/_reset.scss'
import '../sass/components/_grid.scss'

export default function Test() {
    return (
      <section className="container">

          <h2 style={{textAlign:"center", marginTop:"5vh"}}>Travaillons ensembles</h2>

        <section className="flex supertest">
            <article className="art1 col-3">
                <h3>Problématique</h3>
            </article>

            <article className="art2 col-3">
                <h3>Solution</h3>
            </article>

            <article className="art3 col-3">
                <h3>Conception</h3>
            </article>

            <article className="art4 col-3">
                <h3>Développement</h3>
            </article>
        </section>

      </section>
    );
  }