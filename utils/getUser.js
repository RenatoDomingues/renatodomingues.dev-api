
const getUser = async(username) => {

    const resUser = await fetch('https://api.github.com/users/renatodomingues' + username)
    const user = await resUser.json()

    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalRepos = await resRepos.json()

    const dontShowRepos = ['RenatoDomingues/renatodomingues.dev', 'RenatoDomingues/Meu-primeiro-projeto']

    const isNotFork = repo => !repo.fork 
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name)

    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })
    const repos = originalRepos
                               .filter(isNotFork)
                               .filter(dontShowFilter)
                               .map(extractData)
    return {
        repos, user 
    }
}
export default getUser