<template>
    <div id="article">
        <BackTop></BackTop>
        <h1>大型网站架构技术演进（史上最全）</h1>
        <div id="tags" style="text-align: center">
            <span><Icon type="md-pricetag" />网站架构</span>
            <span><Icon type="md-pricetag" />教程</span>
        </div>
        <div id="content">
            <p>1. 概述

                本文以淘宝作为例子，介绍从一百个并发到千万级并发情况下服务端的架构的演进过程，同时列举出每个演进阶段会遇到的相关技术，让大家对架构的演进有一个整体的认知，文章最后汇总了一些架构设计的原则。

                2. 基本概念

                在介绍架构之前，为了避免部分读者对架构设计中的一些概念不了解，下面对几个最基础的概念进行介绍：

                分布式系统中的多个模块在不同服务器上部署，即可称为分布式系统，如Tomcat和数据库分别部署在不同的服务器上，或两个相同功能的Tomcat分别部署在不同服务器上
                高可用系统中部分节点失效时，其他节点能够接替它继续提供服务，则可认为系统具有高可用性
                集群一个特定领域的软件部署在多台服务器上并作为一个整体提供一类服务，这个整体称为集群。如Zookeeper中的Master和Slave分别部署在多台服务器上，共同组成一个整体提供集中配置服务。在常见的集群中，客户端往往能够连接任意一个节点获得服务，并且当集群中一个节点掉线时，其他节点往往能够自动的接替它继续提供服务，这时候说明集群具有高可用性
                负载均衡请求发送到系统时，通过某些方式把请求均匀分发到多个节点上，使系统中每个节点能够均匀的处理请求负载，则可认为系统是负载均衡的
                正向代理和反向代理系统内部要访问外部网络时，统一通过一个代理服务器把请求转发出去，在外部网络看来就是代理服务器发起的访问，此时代理服务器实现的是正向代理；当外部请求进入系统时，代理服务器把该请求转发到系统中的某台服务器上，对外部请求来说，与之交互的只有代理服务器，此时代理服务器实现的是反向代理。简单来说，正向代理是代理服务器代替系统内部来访问外部网络的过程，反向代理是外部请求访问系统时通过代理服务器转发到内部服务器的过程。</p>
        </div>
        <Divider>文章结束</Divider>
        <div id="comments">
            <Card>
                <p slot="title">评论</p>
                <div>
                    <p><b>神叨叨叨丶</b></p>
                    <p style="padding: 10px">谢谢分享，很有启发。</p>
                </div>
                <Divider dashed />
                <div>
                    <p><b>神叨叨叨丶</b></p>
                    <p style="padding: 10px">谢谢分享，很有启发。</p>
                </div>
                <Divider dashed />
                <Page :total="100" show-total />
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articlePage"
    }
</script>

<style scoped>
    #article{
        margin-top: 50px;
        padding: 0 250px;
    }

    h1{
        text-align: center;
        margin: 20px 0;
        color: black;
    }

    #content{
        margin-top: 30px;
    }
</style>
