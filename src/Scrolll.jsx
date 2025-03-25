import { useEffect } from "react";

export default function ScrollSpyExample() {
  return (
    <>
      <h2 className="text-center mt-3">Bootstrap ScrollSpy in React</h2>

      <div className="container mt-4 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-md-9">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example p-3 border rounded bg-light"
              tabIndex={0}
              style={{ height: "400px", overflowY: "scroll" }} // Enable scrolling
            >
              <h4 id="section-1">Section 1</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                inventore a vero ipsum. Voluptatum ipsa minus error ab similique
                vero, repudiandae nobis animi exercitationem, quam praesentium
                repellat eum aspernatur! At voluptate mollitia temporibus!
                Ratione facilis sequi voluptatem similique aliquid iusto fugit
                nisi dolore necessitatibus, eveniet quasi error nihil cum odit
                adipisci reprehenderit. Rerum accusantium accusamus deleniti
                minus dolores sed earum eveniet quo iste, ea aspernatur totam
                sit officia, blanditiis nobis suscipit. Eius beatae omnis quos
                voluptate quo fugiat mollitia quod vero placeat odit maiores
                dicta, cumque dolores molestias illum libero quas impedit?
                Repellendus aliquam laudantium id asperiores quasi optio
                voluptatum.
              </p>

              <h4 id="section-2">Section 2</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                inventore a vero ipsum. Voluptatum ipsa minus error ab similique
                vero, repudiandae nobis animi exercitationem, quam praesentium
                repellat eum aspernatur! At voluptate mollitia temporibus!
                Ratione facilis sequi voluptatem similique aliquid iusto fugit
                nisi dolore necessitatibus, eveniet quasi error nihil cum odit
                adipisci reprehenderit. Rerum accusantium accusamus deleniti
                minus dolores sed earum eveniet quo iste, ea aspernatur totam
                sit officia, blanditiis nobis suscipit. Eius beatae omnis quos
                voluptate quo fugiat mollitia quod vero placeat odit maiores
                dicta, cumque dolores molestias illum libero quas impedit?
                Repellendus aliquam laudantium id asperiores quasi optio
                voluptatum.
              </p>

              <h4 id="section-3">Section 3</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                inventore a vero ipsum. Voluptatum ipsa minus error ab similique
                vero, repudiandae nobis animi exercitationem, quam praesentium
                repellat eum aspernatur! At voluptate mollitia temporibus!
                Ratione facilis sequi voluptatem similique aliquid iusto fugit
                nisi dolore necessitatibus, eveniet quasi error nihil cum odit
                adipisci reprehenderit. Rerum accusantium accusamus deleniti
                minus dolores sed earum eveniet quo iste, ea aspernatur totam
                sit officia, blanditiis nobis suscipit. Eius beatae omnis quos
                voluptate quo fugiat mollitia quod vero placeat odit maiores
                dicta, cumque dolores molestias illum libero quas impedit?
                Repellendus aliquam laudantium id asperiores quasi optio
                voluptatum.
              </p>

              <h4 id="section-4">Section 4</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                inventore a vero ipsum. Voluptatum ipsa minus error ab similique
                vero, repudiandae nobis animi exercitationem, quam praesentium
                repellat eum aspernatur! At voluptate mollitia temporibus!
                Ratione facilis sequi voluptatem similique aliquid iusto fugit
                nisi dolore necessitatibus, eveniet quasi error nihil cum odit
                adipisci reprehenderit. Rerum accusantium accusamus deleniti
                minus dolores sed earum eveniet quo iste, ea aspernatur totam
                sit officia, blanditiis nobis suscipit. Eius beatae omnis quos
                voluptate quo fugiat mollitia quod vero placeat odit maiores
                dicta, cumque dolores molestias illum libero quas impedit?
                Repellendus aliquam laudantium id asperiores quasi optio
                voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
