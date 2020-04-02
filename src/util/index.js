

export function isTransparent(ctx, x, y, tolerance) {

  // If tolerance is > 0 adjust start coords to take into account.
  // If moves off Canvas fix to 0
  if (tolerance > 0) {
    if (x > tolerance) {
      x -= tolerance;
    } else {
      x = 0;
    }
    if (y > tolerance) {
      y -= tolerance;
    } else {
      y = 0;
    }
  }

  var _isTransparent = true, i, temp,
      imageData = ctx.getImageData(x, y, (tolerance * 2) || 1, (tolerance * 2) || 1),
      l = imageData.data.length;

  // Split image data - for tolerance > 1, pixelDataSize = 4;
  for (i = 3; i < l; i += 4) {
    temp = imageData.data[i];
    _isTransparent = temp <= 0;
    if (_isTransparent === false) {
      break; // Stop if colour found
    }
  }

  imageData = null;

  return _isTransparent;
}

