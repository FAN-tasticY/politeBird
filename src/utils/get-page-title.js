import defaultSettings from '@/settings'

// const title = defaultSettings.title || '礼貌鸟'
const title  = '礼貌鸟'


export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
