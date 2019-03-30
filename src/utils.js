export function fluidType(min, max, minView = 420, maxView = 1440) {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`
}
