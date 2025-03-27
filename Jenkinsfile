pipeline {
    agent any

    environment {
        IMAGE_NAME = "rajeshbuece/nodeapp-ci"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rajeshbuece/NodeApp-Docker-CI-CD.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                    sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }
}

