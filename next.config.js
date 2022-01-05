module.exports = {
  async rewrites() {
    return [
      {
        source: "/my-path-1",
        destination: "/my-path-2",
      },
    ];
  },
};
