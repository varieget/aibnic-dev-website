export const smoothScroll = (el: Element, to: number) => {
  try {
    el.scrollTo({
      behavior: 'smooth',
      top: to,
    });
  } catch (e) {
    el.scrollTo(0, to);
  }
};
