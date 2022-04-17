# 3dmodelingreact

This project contains the sample code for 3d human modeling in react JS and tracking of movements of human body by attaching sensors to human body. 
The IMU sensor data is sent over MQTT server into the react app.
The 3D human model embedded in react app will then perform the movements as per the quaternion data sent from the IMU sensors.
3D model used is from Mixamo. 

The sensors are attached to following limbs of body:
1) head
2) spine
3) left forearm
4) left arm
5) right forearm
6) right arm
7) left thigh
8) right thigh
9) left leg (below knees)
10) right leg (below knees)

From this repo you will get the basic idea of how to import the data and apply it on the 3dmodel. 
How to use states inorder to renrender the model on canvas.
List of all the dependencies can be viewed in package.json file.
