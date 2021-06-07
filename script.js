
  let backItems = document.querySelectorAll('img-text-wrapper')

  backItems.forEach(backItem => {
    backItem.addEventListener('onclick', function () {
      backItems.forEach(backitem => backItem.classList.remove('active'))
      this.classList.add('active');
    })

  })
