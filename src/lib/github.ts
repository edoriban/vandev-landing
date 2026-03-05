export async function getVanRepoCount(): Promise<number> {
  const fallback = 8;
  try {
    const headers: Record<string, string> = {
      "Accept": "application/vnd.github+json",
    };

    // Support GITHUB_TOKEN for private repos visibility
    const token = import.meta.env.GITHUB_TOKEN;
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(
      "https://api.github.com/users/edoriban/repos?per_page=100",
      { headers },
    );

    if (!response.ok) {
      console.warn(`GitHub API error: ${response.status}`);
      return fallback;
    }

    const repos: Array<{ name: string }> = await response.json();
    const vanRepos = repos.filter((repo) =>
      repo.name.toLowerCase().startsWith("van"),
    );
    return Math.max(vanRepos.length, fallback);
  } catch (e) {
    console.warn("Failed to fetch GitHub repos:", e);
    return fallback;
  }
}
