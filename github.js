class Github {
  constructor() {
    this.client_id = "1e94fbb1fd3981ef382a";
    this.client_secret = "aaa9accf199c053139b650acfaf68f065ddfa665";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
       // profile: profile,
      // repos: repos
      profile,
      repos
    }
  }
}