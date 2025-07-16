
Since [its release 3.5.2](../04-11-clever-tools-3.5.2/), Clever Tools is able to manage [Clever Tasks](/developers/doc/develop/tasks/). It's now possible to create, configure and deploy them directly from the Console. To declare an application as a Task, check the corresponding box in the `Information` tab.

A Clever Task can be run on demand. It executes the command you've set in the `CC_RUN_COMMAND` environment variable, without waiting for any HTTP request on the `8080` port. After that, the application stops. It's just billed for the execution time.

![Clever Task Management in Console](/images/changelog/clever-tasks.webp "Defines a Clever Cloud application as a Task in Console")


