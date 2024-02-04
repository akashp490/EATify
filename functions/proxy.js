
exports.handler = async (event, context) => {
  const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2563462&lng=85.794416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
    // Include any necessary headers or options, such as authentication
  });

  return response.json(); // Or handle other response types as needed
};
