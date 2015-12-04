import Prefixer from 'inline-style-prefixer'

export default config => {
  const prefixedStyle = Prefixer.prefixAll(config.style)
  return {style: prefixedStyle}
}
