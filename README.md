Tesla's website is amazing, as it shows product information in a simple and appealing manner. [Vadim Savin's](https://www.youtube.com/@notjustdev) instructions on how to build a Native app in two hours caught my attention. So I decided to learn React Native. This blog post contains my notes as well as a written version of the video tutorial.

Here is the video version of the tutorial

%[https://youtu.be/iQ_0Fd_N3Mk] 

In this blog, we will begin by configuring the environment and then develop the application step by step.

Here's a screenshot of the app we're developing for mobile devices. The app is available for download from the expo Platform

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675068753983/33f0a01f-d05c-4221-823b-1977732c26e0.gif align="center")

# Setting Up your Development Env

You can use VScode as your IDE to build your app and run it on your phone or tablet without setting up a simulator.

### Mobile

Download the Expo using the following [URL](https://expo.dev/client) or Playstore

You can put the Expo app on your phone and use it as long as you are connected to the same WiFi network.

### Computer :

Begin by installing Expo CLI, which simplifies communication with mobile devices.

You need NodeJS to install the CLI

```bash
npx expo
```

You can read the installation document here - [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)

# Starting a Project

You can run the following command to get the skeleton for the project and run it using Expo

```bash
npx create-expo-app TeslaClone

cd Teslaclone
npx expo start
```

Once you open up VS Code,

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675084056759/a1a7098e-a763-4f97-a095-7973d1cefc6a.png align="center")

You should see the App.JS, which is the root of the project and contains the starting point of the project.

### Hot Reloading :

By default, Expo activates hot reloading. You can run the code changes, and they will be deployed to the mobile device immediately.

# A component in React Native :

Using the component paradigm, React can deconstruct a large application into its constituent parts. So, let's break up our app into manageable chunks and put the code through its paces.

For example, let's take our App, we can divide the screen into multiple components

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675088725278/948e182d-69a9-4a9d-8138-657b723bc2dd.png align="center")

From the code perspective, a component is a Simple Javascript function which takes the property as an Input and provides the HTML as an Output

![React Props Cheatsheet: 10 Patterns You Should Know](https://www.freecodecamp.org/news/content/images/2021/02/props-1-min.gif align="left")

Courtesy: [https://www.freecodecamp.org/news/react-props-cheatsheet/](https://www.freecodecamp.org/news/react-props-cheatsheet/)

# Car Item :

With the basics covered, let us start with our first component. Car-Item

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675090060215/c271d2cb-3cce-449b-bc15-4926c7ceaab8.png align="center")

From the picture, we can see three elements powering the screen: the title, subtitle, and image background.

Some basic React native controls to know

1. View - Similar to Div in HTML, This allows you to group the Element
    
2. Text - Self Explanatory
    
3. ImageBackGround - Similar to Image but allows it to be back
    

Now that we know what we are building, let's start with the Title and the Image Background

Open App.js and add the following code.

```xml
 <View style={styles.container}>
      <Text>Model S</Text>
      <Text>Starting at $69240</Text>
      <StatusBar style="auto" />
    </View>
```

The code contains a text component for the title and subtitle. The output will look like the following:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675126932497/387bee1a-90a3-46bc-8c4e-3fd40c82dcb9.png align="center")

There are a couple of challenges

1. Content is centred. Ideally, it should be at the Top but it's centred.
    
2. The text component is not looking like the mockup.
    

Let's start by moving the content to the top. This can be done by adding a view and providing a width of 100% and a height of 100%.

```xml
 <View style={styles.container}>
      <View style={styles.carItemContainer}>
        <Text>Model S</Text>
        <Text>Starting at $69240</Text>
        <StatusBar style="auto" />
      </View>
    </View>
```

You can style the carItemContainer using the following Style

```javascript
 carItemContainer:{
    width:"100%",
    height:"100%",
    alignItems: "center",
  }
```

So that we can see the content rise to the top of the screen, I have increased the width and height to full screen. Aligning things in the centre of the screen and shifting the content down a bit calls for a top margin.

Now let's apply the font changes to the text component.

```javascript
 titles: {
    marginTop: "30%",
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
```

I've simply made the font size bigger and changed the color of the subtitle to make it match the mockup.

Apply the style to the Text components

```javascript
 <View style={styles.container}>
      <View style={styles.carItemContainer}>
        <Text style={styles.titles}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69240</Text>
        <StatusBar style="auto" />
      </View>
    </View>
```

Once you applied the style the app should look like the following

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675130155186/7a21fa8e-a792-408b-a932-9717619b39a5.png align="center")

The next item on the car component is the image in the background. For this, we need to download the [images from notjust.dev](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0xOZGxCZkZmMkR0azZyWWdOYlFCcHVHMVZBd3xBQ3Jtc0tuQXF3V1p2bGx1Q1dzbTBxV0Q3WlV1VjdWWERSVHdTVENRcHBaNnBQSkNSa25jclZlbnhXUTVtVXVJaHVaa2txMHdmQTlpYkZOSXFENFZLVVBnTlpPbjlmSUgxbkNpQnpRdWlaUHhhVGNaODVZSWhJSQ&q=https%3A%2F%2Fassets.notjust.dev%2Ftesla&v=iQ_0Fd_N3Mk).

Once downloaded add the images folder to the Assets folder

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675139456957/71c956a0-948b-484d-9b04-4d4a57db386d.png align="center")

Now we have the images. Let's create a background image for the application.

```javascript
<ImageBackground 
            style={styles.imagestyles}
            source={require('./assets/images/ModelS.jpeg')}/>
```

Given that the picture needs to fill the whole display. Therefore, the aesthetic should be consistent.

```javascript
imagestyles:{
    width:'100%',
    height:'100%',
    position:"absolute",
    resizeMode:"contain"
  }
```

That should show you the screen

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675090060215/c271d2cb-3cce-449b-bc15-4926c7ceaab8.png align="center")

That's fantastic, but to reuse the same component for various car Items, we'll need to transfer the code out of the App.js and into Components.

To move

# Button Component

# FlatList

# Header

# Conclusion
