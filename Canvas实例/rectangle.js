// node | String 操作的节点
// width | Number 宽度
// height | Number 高度
// borderWidth | Number 边框宽度 0
// borderColor | String 边框颜色
// fillColor | String 填充颜色
// isRounded | Boolean 是否圆角
// radius | Number 圆角半径


function rectangle(node, width, height, borderWidth, borderColor, fillColor, isRounded, radius) {
  var rectElement = document.getElementById(node)
  var rectCanvas = rectElement.getContext('2d')

  // 一下两种方式均可设置canvas画布宽高
  // rectElement.setAttribute('width', width + '')
  // rectElement.setAttribute('height', height + '')


  //是否是圆角
  if (!isRounded) {
    rectElement.width = width
    rectElement.height = height
    // 判断是否有设置边框
    if (borderWidth > 0) {
      rectCanvas.rect(borderWidth / 2, borderWidth / 2, width - borderWidth, height - borderWidth)
      rectCanvas.fillStyle = fillColor
      rectCanvas.fill()
      rectCanvas.lineWidth = borderWidth
      rectCanvas.strokeStyle = borderColor
      rectCanvas.stroke()
    } else {
      rectCanvas.rect(0, 0, width, height)
      rectCanvas.fillStyle = fillColor
      rectCanvas.fill()
    }
  } else if (isRounded && radius) {
    rectElement.width = width
    rectElement.height = height

    if (borderWidth > 0) {
      rectCanvas.beginPath()
      rectCanvas.moveTo(radius + borderWidth / 2, borderWidth / 2)
      rectCanvas.lineTo(width - (radius + borderWidth / 2) - (radius + borderWidth), borderWidth / 2)
      rectCanvas.arcTo(width - borderWidth / 2, borderWidth / 2, width - borderWidth / 2, radius + borderWidth / 2, radius)
      rectCanvas.lineTo(width - borderWidth / 2, height - radius - borderWidth / 2)
      rectCanvas.arcTo(width - borderWidth / 2, height - borderWidth / 2, width - radius - borderWidth / 2, height - borderWidth / 2, radius)
      rectCanvas.lineTo(borderWidth / 2 + radius, height - borderWidth / 2)
      rectCanvas.arcTo(borderWidth / 2, height - borderWidth / 2, borderWidth / 2, height - borderWidth / 2 - radius, radius)
      rectCanvas.lineTo(borderWidth / 2, borderWidth / 2 + radius)
      rectCanvas.arcTo(borderWidth / 2, borderWidth / 2, radius + borderWidth / 2, borderWidth / 2, radius)

      rectCanvas.fillStyle = fillColor
      rectCanvas.fill()

      rectCanvas.lineWidth = borderWidth
      rectCanvas.strokeStyle = borderColor
      rectCanvas.stroke()
    } else {
      rectCanvas.beginPath()
      rectCanvas.moveTo(radius, 0)
      rectCanvas.lineTo(width - 2 * radius, 0)
      rectCanvas.arcTo(width, 0, width, radius, radius)
      rectCanvas.lineTo(width, height - radius)
      rectCanvas.arcTo(width, height, width - radius, height, radius)
      rectCanvas.lineTo(radius, height)
      rectCanvas.arcTo(0, height, 0, height - radius, radius)
      rectCanvas.lineTo(0, radius)
      rectCanvas.arcTo(0, 0, radius, 0, radius)

      rectCanvas.fillStyle = fillColor
      rectCanvas.fill()
    }
  }
}

rectangle('canvas', 200, 300, 0, 'black', '#cccccc')