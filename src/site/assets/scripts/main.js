const colors = ['ffb74d', '8bcfee', '51f1be', 'ec6a6a']
const isSetInitialLoading = sessionStorage.getItem('isSetInitialLoading')

if (!isSetInitialLoading) {
  sessionStorage.setItem(
    'randomColorIndex',
    Math.floor(Math.random() * colors.length),
  )
}

document.documentElement.style.setProperty(
  '--color-primary-links',
  `#${colors[sessionStorage.getItem('randomColorIndex')]}`,
)

sessionStorage.setItem('isSetInitialLoading', true)
