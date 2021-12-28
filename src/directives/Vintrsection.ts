export default {
  mounted(el: Element, binding: any) {
        const options = {
          rootMargin: '0px',
          threshold: 1.0
        }
    const callback = (entries: any[], observer: any) => {
          
          if (entries[0].isIntersecting) {
         
            binding.value()
          }
        };
        const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
    },
    name: 'intersection'
}
