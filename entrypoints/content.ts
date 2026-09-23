export default defineContentScript({
  matches: ['https://forum.cocos.org/*'],
  main() {
    console.log('Hello content. cocos');
  },
});
