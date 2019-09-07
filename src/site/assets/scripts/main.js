const colors = ['ffb74d', '8bcfee', '51f1be', 'ec6a6a']
const isSetInitialLoadingSSKey = 'isSetInitialLoading'

const isSetInitialLoading = sessionStorage.getItem(isSetInitialLoadingSSKey)

if (!isSetInitialLoading) {
  const ranNum = Math.floor(Math.random() * (colors.length - 1))
  document.documentElement.style.setProperty(
    '--color-primary-links',
    `#${colors[ranNum]}`,
  )
}

sessionStorage.setItem(isSetInitialLoadingSSKey, true)
