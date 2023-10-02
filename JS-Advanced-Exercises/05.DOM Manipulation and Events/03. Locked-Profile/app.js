function lockedProfile() {
    
    let profileBtnElements = document.querySelectorAll('.profile button');
    
    
    let profileBtnElementsArr = Array.from(profileBtnElements);

    profileBtnElementsArr.forEach(btn => {
        btn.addEventListener('click', (e) => {

            let profileElement = e.currentTarget.parentNode;
            let isActive = profileElement.querySelector('input[value=unlock]').checked
            
            let hiddenProfileInfo = profileElement.querySelector('div');

            if (isActive) {
                if (e.currentTarget.textContent === 'Show more') {
                    hiddenProfileInfo.style.display = 'block';
                    e.currentTarget.textContent = 'Hide it';
                } else {
                    hiddenProfileInfo.style.display = 'none';
                    e.currentTarget.textContent = 'Show more';
                }
            }
        })
    })
}