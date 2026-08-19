if (Array.isArray(b.tests) && b.tests.length) {
  // Support new way of tracking test_presented where all events are bulked into a single event.
  var dataContract = [
    "test_personalisation",
    "test_platform",
    "test_type",
    "test_name",
    "test_version",
    "test_segment",
  ];

  var adobePropNames = {
    test_personalisation: "tp",
    test_platform: "tpl",
    test_type: "tt",
    test_name: "tn",
    test_version: "tv",
    test_segment: "ts",
  };

  var tests = b.tests;
  var testsStr = "";

  tests.forEach(function (test, tIndex) {
    var isLastTest = tIndex == tests.length - 1;
    dataContract.forEach(function (propName, pIndex) {
      var isLastTestProp = pIndex == dataContract.length - 1;
      var delimiterStr = !isLastTestProp ? ";" : "|";
      var delimiter = isLastTest && isLastTestProp ? "" : delimiterStr;
      var propValue = test[propName] ? test[propName] : undefined;
      testsStr =
        testsStr + adobePropNames[propName] + "=" + propValue + delimiter;
    });
  });
  b.tests_list3 = testsStr;
} else {
  // Supports old way of test_presented tracking. Will be deprecated at some point.
  b.personalization_evar19 =
    b.personalisation +
    "|" +
    b.personalisation_platform +
    "|" +
    b.personalisation_recommender +
    "|" +
    b.personalisation_type +
    "|" +
    b.personalisation_name +
    "|" +
    b.personalisation_testversion +
    "|" +
    b.personalisation_segment;
}


//adding a comment to test the git commit and push functionality