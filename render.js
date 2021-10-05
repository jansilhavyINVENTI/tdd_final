function getLiSpanElement(liClasses, spanClasses, innerText) {
  let li = null
  let span = null

  li = document.createElement('li')
  li.setAttribute('class', liClasses)

  span = document.createElement('span')
  span.setAttribute('class', spanClasses)

  li.appendChild(span).innerText = innerText

  return li
}

function renderFunction(locKey) {
  let localizedData
  if (locKey === 'cz') {
    localizedData = medailonkyCZ
  } else {
    localizedData = medailonkyENG
  }

  localizedData.map((medailonek) => {
    medailonek.articles.slice(0, 2).map((article) => {
      const li = getLiSpanElement('sc-dAOnuy djaUYh', 'sc-dOkuiw hSoupg', article)
      if (document.getElementById(medailonek.count + '_articles_snap')) {
        document.getElementById(medailonek.count + '_articles_snap').appendChild(li)
      }
    })

    medailonek.articles.map((article) => {
      const li = getLiSpanElement('sc-dAOnuy sc-cSYcjD dwWrJv', 'sc-dOkuiw hSoupg', article)
      if (document.getElementById(medailonek.count + '_articles_full')) {
        document.getElementById(medailonek.count + '_articles_full').appendChild(li)
      }
    })
    if (document.getElementById(medailonek.count + '_img') && medailonek.img) {
      document.getElementById(medailonek.count + '_img').setAttribute('alt', medailonek.name)
      document.getElementById(medailonek.count + '_img').setAttribute('src', medailonek.img)
    }

    if (document.getElementById(medailonek.count + '_name')) {
      document.getElementById(medailonek.count + '_name').innerText = medailonek.name
    }
    if (document.getElementById(medailonek.count + '_name_b')) {
      document.getElementById(medailonek.count + '_name_b').innerText = medailonek.name
    }
  })
}
