const navSection = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('addNew');
  const contactSection = document.getElementById('contact-section');

  // Nav buttons
  const listLink = document.getElementById('list-tags');
  const addLink = document.getElementById('add-tags');
  const contactLink = document.getElementById('contact-tags');

  listLink.addEventListener('click', () => {
    list.classList.remove('hide');
    addNew.classList.add('hide');
    contactSection.classList.add('hide');
  });

  contactLink.addEventListener('click', () => {
    contactSection.classList.remove('hide');
    addNew.classList.add('hide');
    list.classList.add('hide');
  });

  addLink.addEventListener('click', () => {
    addNew.classList.remove('hide');
    list.classList.add('hide');
    contactSection.classList.add('hide');
  });

};

export default navSection;
