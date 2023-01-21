##  The Developer Certificate of Origin (DCO) on Pull Requests. It requires all commit messages to contain the Signed-off-by line with an email address that matches the commit author.
## The Developer Certificate of Origin (DCO) is a lightweight way for contributors to certify that they wrote or otherwise have the right to submit the code they are contributing to the project. Here is the full text of the DCO, reformatted for readability:
### Contributors sign-off that they adhere to these requirements by adding a Signed-off-by line to commit messages.

#### This is my commit message

#### Signed-off-by: Random J Developer <random@developer.example.org>
### Git even has a -s command line option to append this automatically to your commit message:

### $ git commit -s -m 'This is my commit message'
### Link for Installation :https://github.com/apps/dco
### Once installed, this integration will create a check indicating whether or not commits in a Pull Request do not contain a valid Signed-off-by line.
![DCO](https://user-images.githubusercontent.com/13410355/42352738-35f4e690-8071-11e8-9c8c-260e5868bfc8.png)
### Once installed, this integration will set the status to failed if commits in a Pull Request do not contain a valid Signed-off-by line.
![DCO](https://cloud.githubusercontent.com/assets/173/24482273/a35dc23e-14b5-11e7-9371-fd241873e2c3.png)
## Further Reading

If you want to learn more about the DCO and why it might be necessary, here are some good resources:

- [Developer Certificate of Origin versus Contributor License Agreements](https://julien.ponge.org/blog/developer-certificate-of-origin-versus-contributor-license-agreements/)
- [The most powerful contributor agreement](https://lwn.net/Articles/592503/)
