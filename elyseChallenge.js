// The challeges is to find the mediaum in sorted arrays

const findMediamInSortedArray = (arr1, arr2) => {
  const contactinatedArray = [...arr1, ...arr2];

  const SortedArray = contactinatedArray.sort((a, b) => a - b);

  const NonDuplicatedarray = [...new Set(SortedArray)];

  console.log(NonDuplicatedarray.length / 2);
};

findMediamInSortedArray(
  [1, 2, 3, 4, 5, 6, 66, 88, 34, 66, 33],
  [2, 6, 3, 6, 3, 6, 3, 678873, 455],
);
