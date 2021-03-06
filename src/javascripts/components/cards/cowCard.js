import cowData from '../../helpers/data/cowData';

const cowMaker = (cowObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${cowObject.firebaseKey}">
                      <div class="card-body">
                        <h5 class="card-title">${cowObject.name}</h5>
                        <p class="card-text">
                          Breed: ${cowObject.breed}<br />
                          Location: ${cowObject.location}<br />
                          Weight: ${cowObject.weight}<br />
                        </p>
                        </div>

                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          ${cowObject.farmerName}
                        </li>
                          <li class="list-group-item"><a href="mailto:${cowObject.farmerEmail}" target="_blank">Email Farmer</a></li>
                        </ul>
                        
                        <div class="card-body">
                        <a href="#" id="${cowObject.firebaseKey}" class="btn btn-info update-cow"><i class="far fa-edit"></i>update cow</a>
                        <a href="#" id="${cowObject.firebaseKey}" class="btn btn-danger delete-cow">Delete Cow</a>
                      </div>
                    </div>`;

  $('body').on('click', '.delete-cow', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    cowData.deleteCow(firebaseKey);
  });

  return domString;
};

export default { cowMaker };
