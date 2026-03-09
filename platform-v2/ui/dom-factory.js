export function createElementWithClass_platform_v2(
  tagName_platform_v2,
  className_platform_v2,
  innerHTML_platform_v2 = ''
) {
  const element_platform_v2 = document.createElement(tagName_platform_v2);

  if (className_platform_v2) {
    element_platform_v2.className = className_platform_v2;
  }

  if (innerHTML_platform_v2) {
    element_platform_v2.innerHTML = innerHTML_platform_v2;
  }

  return element_platform_v2;
}