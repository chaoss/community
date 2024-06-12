##  The Developer Certificate of Origin (DCO) 

The Developer Certificate of Origin (DCO) is an easy way for contributors to certify that they wrote or otherwise have the right to submit the code they are contributing to the project. All open-source projects under the Linux Foundation (including CHAOSS) are required to include DCO information in all PRs. Here are instructions on including the DCO with your PR.

The DCO text (and what exactly you're confirming by adding this to your PR) can be read in full [here](https://developercertificate.org/).

### Adding a DCO Signed-off-by line to commit messages:

There are 2 ways to add your DCO sign-off: through the GitHub web interface, or through the command line. 

#### 1. Using the GitHub Web Interface

You can add your DCO sign-off through the GitHub Web interface by manually typing this in your PR's initial commit message:

    Signed-off-by: FirstName LastName <youremail@example.org>

_Note: if you are manually adding this information to your initial commit message, the FirstName, LastName, and email **must** match the information in your GitHub profile. Otherwise the check will fail._

You can also install a [DCO Browser plugin](https://github.com/scottrigby/dco-gh-ui) so that it will do it for you automatically. (CHAOSS highly recommends this!)

#### 2. Using the Command Line

You can also add your DCO by using the  **-s command line option**. This will automatically append this information to your commit message:

    $ git commit -s -m 'This is my commit message'


## Further Reading

If you want to learn more about the DCO and why it might be necessary, here are some good resources:

- [Developer Certificate of Origin versus Contributor License Agreements](https://julien.ponge.org/blog/developer-certificate-of-origin-versus-contributor-license-agreements/)
- [The most powerful contributor agreement](https://lwn.net/Articles/592503/)
