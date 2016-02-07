function swap (a,b)
{
  var tmp;
  tmp = a;
  a = b;
  b = tmp;
  return a, b;
}

function selectionSort (sortMe)
{
  var i, j, tmp;
  for (i=0; i < sortMe.length-1; i++)
  {
    tmp = i;
    for (j=i+1; j < sortMe.length; j++)
    {
      if (sortMe[j] < sortMe[tmp]) {
        tmp = j;
      }
    }
    var a, b = swap(sortMe[i], sortMe[j])
    }
  }
}
