import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Balance} from '../../src/app/screens/balance';

const props = {
    dispatch: () => {},
    navigation: {
        navigate: () => {},
        addListener: () => {},
        state: {
            key: 'SCREEN_BALANCE',
            routeName: 'SCREEN_BALANCE'
        },
        actions: {}
    },
    error: null,
    exchange: {
        XLM: 0.3936,
        BTC: 0.0000147,
        ETH: 0.00025584,
        EUR: 0.102828,
        USD: 0.12,
        JPY: 13.8984,
        GBP: 0.091956,
        GOLD: 0.0031452
    },
    balance: '100',
    balanceXLM: '50',
    baseCurrency: 'USD',
    escrow: null,
    firstTime: false,
    kids: [],
};

export const kids = [{
    name: 'Kid name',
    dob: '01/01/2010',
    photo: 'data:image/jpeg;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/90ABAAS/+4ADkFkb2JlAGTAAAAAAf/AABEIAI4AjgMAEQABEQECEQH/xACxAAABBQEBAQEBAQAAAAAAAAAJBQYHCAoEAwsCAAEBAAEFAQEBAQAAAAAAAAAAAAYCAwQFBwEIAAkQAAIBAwIFAwIEBAQFBAMAAAECAwQFEQYSAAcTITEIIkEUUQkVMmEjcYGRFkKhsSQzUtHwFxjB4UNy8REAAQMCBAMFBgUDAwMFAAAAAQIDEQAEBRIhMQZBURMiYXGBBzKRocHwFEJSsdEjM+EIFSQWQ2IlNIKSov/aAAwDAAABEQIRAD8AEJJAoaV0gJkUNCI5VYHKsO20foZT4wO/ngQTlJObai1OYmOVebUheQsgVGSJFjVXIw25PdjAyxc4/YA/PDwAG1NrTlk86rJrevttv5kSz185iSKmsVPEvUZerKtSGk6u3GVXYRlmUDt3+ODDhdptSHC7sCKocQUQtGmtaAeV34w2kvw8Pw4anRnL+Ohu/qF5j8zNYV+k7VVSCqpdOWeqtdjpZNY3eneUtJDHLDspIe6yyDJBVSA5ieILaT+Bs+6tRMq/SPD/AMjVzhymmWfxFwAqNk9T4+FZn+avrN56+o/W9w1lza5hXrWl4rat6+eq1BXVE1ntUbEhJILaxjpWeJW2xq0TgdlQKPFM20m2EzKjuTqTTV3dXN8uVEBMaJGwFLemvUJJRJHC3+I79T0/frXK7VXSnliK+2it1HUpR0kEBX2KHaKFfgEnNii9EZSru+NVi7cgwEgk+FWk5Y+sa/UVVSw0tVZNNzCojFMblfunHM+c7Err19bCtSS3vVKWKIr+hiw91hb4g4lYggAfOoxaG2UzREdfc+L5zQ5TWS6Vb3GLU2k6qK53qltV1luFl1Jp1InjrRBcrPFCqzwQkExxxbmUZ+44NRcN3diHExmSO8B0qu77aykiE8j41LvIv1F8pL7FZLavNKq0S9NG6Uklqq66429Kk7fZfamujqlWpAbBWVVXYcghTnihdftlO5dAk7VMQhxKc0kq86Mjyb9Req9JTWq26o1Bbde6YuNPHLbr1Y6ei/MxRjvJUxxw1dXTXCliVt0v0wMsWQWCHOI11hbFwJEBXUDQ1Ptr59pcGVDxoiWnNVaa1bbVu2n6mOup5FQSCnnJmiJXLLUo6ySI+QBhhkf7Bl5aOWjhSoGOoOlEzLwdbzJOppzU6NUSKkZYKcfqIJH7ZwoOB+3EAqExzqe0gESd67bnbGhhBP8AmXP2+3fH8+GBT2idfv7+/NEjoQ0e79v7D5/24bJyqHQ02lH6qTZKAMyrkYLd/Hwe2f3xw0PlSFpSdqkKx26mgoGdSN374G4/bhaVRpHKnGtBFMS9xvJLMVXGWI/qG7/3A4bBg06STURXi3NJJvIOeoR9+3fxwtQUo+Fc3Nf/0BQ1LUyOrRvuZXMrsWcgHPbLL2IkOcdx/MDgNovEzAMGk+anWn3TtKRKuBGEV23gld7qdx2iMv57/wC3EkHQUlRUNJFC39VOo5Ldrik6Uksa/QW6SUpIyOzBUl3A/pyS2M4PF7hbikNqgnU1Q4gIdBHSqz3LUV51peXr6yWarqqlooKOnLvN04okWKHGdxWOCNf6nJ4+fWS4Vq86eazKQEjlT2s9habZSRRrUEsGcuxWGoqAAJJJGjw0sURyFGVUfue4r1OlRzGrBDeVMgU7Lha2t6JTk0yI/ZzD1nkZU77FSN1MahvCAEgfGckONupMFU5vjSCjICj401vzK20Ejo1HLUNJlXWRqlD27ZiXqmeHZ8dN0I+Wz5nB3ONYjp9/f1hqZA1a19anHlP6gK/lzVbbMbjSrNGYpVpHnuEZDDbmRLpWVlPuX7uGGMg58cXOGYkuzko9078/3qqubaRC/l/NO6m5sPR6jk1Nb1/LaO71KLqGjSOiekMrSl1uH5bTMtHSuZGJkaGONSScpkkmvu8RSpxSAMpPMR+1TrezUUhYMo570aT0l876yS1R0daKPUGhpGgetNpNZGLBWRlBQ3ySSkc3OxTo77Y7lTr0omO2cLGSTe4beqeayL1yjX76U04z2S/BW33/ADRg+Tvqc1Dy11LbaO7V7XnS91qs2DUu+hjkudOwTrWLVUUaFKbU1rU+2SM/T10W10KbiqovVNOtKS4ApHUDUGrOzSQsCYNHY5c3uz65sVu1JYzHWQXCBXDU5ACVCKvVikQ7ulLCxwyEDgGfytumRtRK2F5NCIpf1FTVkbIJ42UFRjKBe3xnBx2x9uIxdSrbSnsqQD9/f36IGRHFnxuQj+oHbiPJUoZtq+Pu0juQXAz2wf6EH/54+FRyRS1R1Bii2F/b5/bv/vx3VOvOnWz0rjqulIu44O4sf5jwP5cIA6UvlTCr6dWIwP8AMx7fH+3knh5BJ06UnMue7tX/0RTVsDSIGUBXdkXey7hEijtKQBhdxIBOf7+eA7WY50Xc/GvNon6UjykEJSyqMptI/hBgfjw+P58SEJkCeVIWRBIOtBi9XlQ8vMSlizlDarYQPvmngOCR9gx4uMP0aUTsDVFfElxPWKZGgrJPUKTTRMZGjVXkKklkO3fHGy4YKRgEDBOMeCeI1ysqUZJAFWVonQBI1jfp5VcDSeh4bbZ6qsqY2WToxdWeQgGKSTxBGNwVnPbsMdzn4OIqV667GrhDRSjxqOdR0ctZJUQ0sDx7ch5Yx/EZG7MZZGwzBsYB3KFwe2Rx1C+Z3qO4OQGtRHPp56NXdoRUGTeyj9DOndQ4yCI6VWHk53nOP3eFyB3FVE7BQBXSFQ26prqtY6aOStZH74Oykp8HwGAUNgefn9u3C14gGUyICa63YOXK5SMx8OVT9YrHWQwUkEqdQ1LGNokQEoi7BLiLbgqFbyR38Y4pnsYTKnJ0FX9vgTiglABClVavkvU6n5N3+2Xiw3KptUc9QMwkySUFQZ36bUtZThei1JXI+xwSyAMNwZd2LjDMaZUpKkmFHb+DVdf4HcW2YQcs7fUURt+dEBnWF44KLS2o6KFK6zyBylLcqYsZY0l6rLTV1mlVpKOVHL/TiWHeTGDxfvXCndUkap9KhNoCCM2oB+/v7B2vwq/V/brBzIouTmudTUtwtOqOhBp+vq5FTbV9MQ0K1TuBHJUuy9B5EYbwVZgMEkevICMyddfhV60A4iB7wE+daAOaNVbjNSpSlMNGCduO3wQ2D5ByP2PFZlJ2r5KwRrUL1lQoTA/6f/7j79uFKRGori3RlM03t+WHf/KTn4H/AIOEGQYNRe1ClEcq6Y3bCru/yE47cOESO/vUkEjbY1+ZGYhO+cAk/Hx/TwOEhKgZilKXGqaTJIlbbnxjPbt5P/1w4MoHdppSvjX/0hbzwRSgCRHWEhWl2hCdiOw35yBuLp4z2A7/ABwJhKSISdaL65L1UJFSz08bh0NNV1C4yoWPoyOELrkHKr5HY4xw8kgaGozm21BT9VaJUcz7ZFG7vK1BRK8Jj9kcaU1OkDJJk9TqENkY9u39+LKxKuyXIHZ8jVZeBBcQAZXzEfCOtT3yP5dTVyWrMO6GFYamoZ02iSQ94IwfPTEjb27Z2oOITjiVqM7UQ2Vuckxr9KtHq7T8Fvtz043tJKE3DpbE6q5jV3Xbkhgjk9xlMfccNLSU9QDViW8rc8z9Puajubl2ZKamo0p3llqFjqqyRQYhmdNyRByGYiNdqgEZGTjzw06sNgq5RSAznhMd6ajbUPLK7Xesa1Wykkmw2LhJFB7EYdjDKyEtiJQF6anC+D8jimucWatUFayArl0q4seH7i+cDbYPZ+VTPy29LupZEZ4rFVVjBYiscNMY4UyV9jSBduScEqm5ivbI4DcR4oaWqCuPWtHwngosJ0ROo5aVdjQno2qtv5pdaMNVPNFGaYLkQxpKN8S7VZVMudx8n24+/AbfcXJK+xaJgDX1o7w/g1pLfbPR2nIRoKcvNXkL+S2WppDRrDC0O+N0TvDIqMgKthSymNsdvcAexzw9g/EbnbBOY6H41Ex3hNtbClJSCSOQqoE17uIpKzT13qVp6ujmjhWtRECtc6OJfy+vlIKFBcYYgs24AF0Pb3seNuwfFvxVsJM1geN4QbC5KQNJqU+TvOK/afnt94oa0Q3/AEXXQXamUORVfRUlTGK6kDxMs7mgdUYhtzdFhj2jvYXKz2cGq+zMHTdP15Vtk9N3P2H1B8mtC8xoK0VUl1tEEFw3S9V4rpSKKetjkbsd7yxljkA5J4hWyu0QVfmmKav0li4gCUKEip4lnLqe+cLgZ/8APseFqKxoqoS3VHQbVx7yCx+QoH9/jh5SElOY+9SASDpvXp1ije7ysYx9+/YZ4bSCo97enEvKAINfszZz27KoP8ie5/34cIjQ0+lYUPGvAMWfCnwgzn+/zjHc8JCQB4Uk6+9X/9MX1SUeFokqolLhWKmVl3l1LDa2GYh3HZcDPnPAclRB0oyUEDRNM285jtNayMVVaGrjc9QMzY6gQAtjCRKSOx7/ANe7qVEkg7UwRpqaEJzyoJrtz1tNuj9z/R0oZWPZRGcEfuSV7cWzC8lmsnaaq1oz36UjaiXcnNPNbNIwVOAklyubwI3SZ+lQWtIoZyrAMNk1QSvbt7TxWNwcyxy0o4tmFBtMfmP7U+dX2VblUWeikQwG4mGtn7nEdCjdlK7VZA9FDGCxz3c8cKxzNSXmTlGX3iP3qfNL8uqGjsq3S+4Wa/T/AElns9FB1btdKjsi01M5EgjUTSd5VBCKMeRwK4/jAs21FO/OiTAMCVeupG8naiZcgPw/6O62m33nUlogofqYIppYI6ffHRwv7/poY13NUVD5G5j85JJJ7YbimO3l6+pQWeyJ0POtywzC8Owu2S2lCS8Br5/x41e7/wBsWmbFampbVY4qdY4RFThIkSWodm989Qyr3GFGF8D9vgccLquZI61eC6QkDYeA2FMR+VNPZWVDApanZpEAiADyMTnA7jaPjP8A34QGVZipWqjTouUuIgTlqvPNfQVDdLfX0s9MpWRZMgqAyylT3U+BjsP34ftnFNPBQJkU+UBxooGqSKBjz65T1VgvVbUxRly4dEdlOyURvvhWTb/+VHUAH5Gf66/wvi4UpKRoTuKx/jPApaW5uRr5VUuxavfTOtIK6qiaZFjjatjkURVEtJOPornDLlVjraY07bsNhgVXuPnVFLzshfPYViQJZuSlW3Py51p5/Bn5q1Vpq+YPI+tuMldYamODXWgpZ5dxSnl2JcqAFmJE0KuhdfuCw9rAiFaP5LvJycBI8xuPhUvFLYOWaX0+80YPka0IbkKEgjvgj+wOftxcqQlZChrQukk79a8BKN0gDDJI7dv2/wC3CwAe6o0omK/i2S/fv7QP7/8AfhJTlVpzrv3+9fsFfeCR3AH9fb/88JUSpXjFOoIAPWl6lpYwu4gElUBx2+P6cLKMqY8aWkKPv71//9QYDR1DNTn6GsYrjfGIoWQMEYAKw7YJ+MHzwGzzG9GKskApOtM3Vi1MlLXo8KwrJbHhiLxhZFb5K7CR2I8ftw+kfm2ppWWJ+/v78hV3qnN89S8udpjtb1nWdyAvQt0shkYghh32dh38cT5S3YlXU1GtWi7iSfD6UW/l3aYo+WOlmjHRd9O000Typ02mrr1c6p9pfcd8axzoxyO4HA829ClhR73aQP2rTra3SLZtQ/RPxp62jRaaq1vFa0dxTQVFntdYxLQqlttixyXOYs5JMdRFTsGLN7VB+54+ffShKiowEgmuotCtSUoklRAq8XpPs1s5w+oO33CgoYm0/YFqLFpSjLM8dHbbbKkVff3T3g1VfOSkTZBO9mH6QTj3F1+6v/i/91ZzHwHQVrXC1lbsW67+P6ae4nxPP0mtSmjdC0trs1FS09NGkKQRrgRZPZB4yD44CEsZh/41el9O6j3zXnf9NUkYbbS7pHBHUKgsex9oPwO+QOHCwgNxG339/cNoeXmgnu1VHV2kpZKltkWxerJlyMOy/I2+PB/pxF7LNomrFp8NzPOqvcyNIMKepkFJg7SPdk+M9zgDd/p34bRbOKXMGKnIvG0Jgq09KDh6ntP07U9fTMIFq3imaGAsgkLJlg0QJ3HuB8cFuEBbTqXEjuih/GLhl9tbZIMjTnQXtdWxbqkepKKeNKizXVqK70zgRLWWuqL0tVJvKrGlVSyopkViN0aZHcnO4YU+X7bIoy7lBANeesctQzddokDsyYMfOiifhuc0JtC85uV9yNTAOncE0pe4up+uCfqUtNJFOC6HGza3cBlbyRxW3Lv4a8B/LnB+O/y3qzYYF9YKbHvdmR5kbftWzOlkWopUmjcSRSCN4pI2yGSRQ4z8r2Pg/wCvBi2QUDLtWbqltwp2jf0rnFPO0rKpLb3UeO47+O3nhAZUVhQr4kkilKSlniyzg+8qASMY7ff54fNO1zSlowzfO5fH7f6cJypivp1rpS8qiEb9uGxk5OcD4xx0iaX2iuf39/fh/9UYG2ZWgWOomjiiZ3jG5sKUKBWLBgZG2+fPj+fAdRfNM7WFZILDcd80hMVDVySPuJxIP0YZQG/y+D4HDyVZjA2imlRlgUMjTFEzc2ub93nXqNa9M3eWLJXKyV9WYFb3ZLBTNntg4HC750Ism0fqcA+/v/EzA2Su8dWRo20VUZTQllabQ3K+npk2xy6VsN0dossD9BbaefZJkMwVp5R3z2I8AcBNtclV25m2Q4r9/wDFa03bZMOYTpK20+uk057bXDTOiNX3t4T9XqCeqtiViECpjiZNsrU0rIWjaSomVNwzuDd/nh69uEuZR+rveGUUi3ZU1mWqdO6PM/xVlfwxL9zAo+a2qKnRvLM6nitVlo4oameripqBEqKuqqNsO6WLfNGuEHuGNpOfjjOcaaYdfNwSC6SRHSjfD3lsWDdpBSxuD1/zWjjTHPrn11qejunJSw0tIFiBhXU1bS3JYz2d1Y0dzt0jr52iUZB7Y4onFtobyJyqV6irRlDLhzLWoHykfT61Zyw3+TVlBJPcLBV2SrRe9NUyR1H3UkSoqKf6D54aQWljKQQTSXMzZ7qpT5VWjnHqOHTKVckFOtRPDHI0cZITfIPCk/APDCsiRoO9971IbQt1wCe7zoeus9Bc4edUFR9druq0HpmUHZQaUAo7hNH3JNRdQq1g3LjtG6j7/GH7e5bTqEBahvO1duGm0dzMrN4GKE1z39GOldPVNxqjr/WWprhFJLUTVF31NW1FZ1U946RaR3hCt8A/HnzwS4fjT6e6Gm0p20AiqC8wVp1OcrWVjXc/zQmb1Yae26i11pyEGX6iJ7nAlUzyNVywRL9TtddrbqhY13/Ibv5JIO8NvQC296GOU7UAYzYaON7qIkH0qSPSdfqah1zYZIZ8UFRVU9XTytHmWhr7dVQ0ldT7Vb+HU0xWF1wQH37vBwJOPpHZdoZCRzHQ/wCaicNrlfZfmIPxG/0rdpykuUmoOX+kr0m+VKyxWuUvjIdhSRb2PbAO7/bghwm6Q/aNqB0KR8YoDxhnsMQdaPJZ/ep40nbFuVWqtGcGQ59p7Y/n4PFnnGaAagtzEnepEvml4DTgRx4O74XzgfyPjhYMp1p9CQd6gPUcbUMpjIZcSNnIx4z/APHHyddE0lYSPdqM6+6dMn3dzIc+D4B7YOPHHaQSBX//1hgSoxLJlEnaKokKHOYohufcMZK/oI7Z7/0yIFJ5CirMqmrq6lM1luphMCFrXXsvXniponanTeVElQUVcxK57+5icDuccdbBBk0mD6UPKS1fRao5015STfX2S1tFIzEiOOa6KkiORuIYtCezd8d8dxxGxF05bdPLtT+xq/wFmUXTv5iwP3FG05eUMS8nOWFdBuaao5c0NGsildtKzUVCrQhdjS9SSOL2nIDZ/fjNGrzJeXaJIzO5fAyrX4Vt7FoF4ZaGAYZnpGmlIOvbY8FDpHTUcgaolrJ4pKDL+6oiagjmqnRlI2rPcgq7h3KcTbi9Q4twJ0abAST00k/trFQ02ygtIXqoyoD5Clr0retSX013G5WjT/Ly7cwdUz2GqrprVbWSmWGmtNVXpUyVdbVSU1JAIkhYlQ0kxAOyNj24pLTALnFbt1aFpSyDqTqSIB7qdz1irDFsetcOw23aU24t+NhsO8R3lRAol/p9/Ef5lc8eZ1w0++gdHwWGxWiC/wB11No7mDDdaOgoJYoGZa2lu9ssaz1EEk3SZIHZjIPYGyBxzE+CR2S38MukP9m0FmQUac097ZQ6QRTGD8XNlaLfE7R1kuvdmmDnM8lQkTkPXSOlaHORNc+sbAaiVRJE8UL09QO6zQ1MCVEUit4KmOQMMd8H7+A3DmFvGNkfWiLiJQw/KpJGtUG9aV4/wrqSC2wgEvUIzqSAemWw/bz3yeGb9KWllonvirnh9BvGu3V7kUO/1LaC9QXNHTlys/L266hten6SwW+Wis1h1bT6D/xXUXWCVKyp/wAU0F1pb4kmnVVClGxp4KlnO9m2hSV8PIweySq6vG0v3ojKhxJLUEbykjvT1kD9xriJnGL5YtbBSmrPULW2QHcwOg7wICSOn0oXlZ6HeZFl0pQTPPqjSesKW41dwvF6quYdx1JJcIHESQ2ySnlq7hR1YJjaWSRwCWkKqcAklFxj+GqsEWyGW3LjUrVAA15JgSABQza8N4ki/cvHHnENmMqAtR23KpkEnnFUn5u6ardA690/JdUxOJ4qGtnZDtn+uxB1yPBMkhBIz54iYc7nQsJPiPSp2NWZaKFrG5yk+f398oS5K3STTPOW/wClHlEcVNeqK+UoRd5SG41KUss0W4EqsJnVmUDBC9/2KMYWHsLDwOi0keoE0B4GgsYqtj8yFg+hMV9Bb0Hcv9W8y/TPovUdrqImihgktSoJFYB6NtgB7RnaYmUjA8Hiq4dvnvwQSAYSqDVTxpaMs4woFSUlaQqD4/5qwtw0JzW5czS1tRaauvoQxYVFvb6jp5bJDpGSwIH7cFKMRSBKhBoO7JwDMgpKfA0q2nUmtK2Jp2tVyVFBOx4HBxj4B7j/AM/o8nE0K0k0rs3omNKrTzQ1jexXvClFVxyxuxlU08gbBz5G09gBxJRcr3RrUNToSspVvUA1t/v85DMtQuCRjoMT3z59me3DwuD+aQaa/FI2r//XGbORLJJ0yuTFtDjuVleSRdnbAIYkA/uOBQ5soy70TkTTK1tsg0zfpqjY6U9trYkRowFZ3p5Ypv8ANgLGPB79/wDToQT7u4rpGnjVIqNIKm9802fJ+qptkg3FkNNRPaponkUKVwwnfHx2/tR4wpYcZg90K+Zmi/hlINq+NZUg/LWjN+mpabU/LLlhaxODskpI3+oMcqmlpYKBRGsYbKKqU7ldwHZe/Y8ZPij/AOFvniB3JJ6a661uOAp7fDmUcwkAT0iom1xeKW78x9W/l1SJBo+tt1NLKC7Q1ElwvlVcpyMNt2QxPToWGV9mc4Hec1m/25K3Dq9mPrlA/moqyhWJuBH/AGso/wD0TV1/RFyi0VrfUVP/AIg05Zr6tNcLzDOlwpvqRipulTVIxZcSZaOcdw3cHintsRuG77+mtSe6NPECKJ73DGjg4UpAMqMmNTJJ9d6Onor0ocpNNXGC66R5faR0tIxikq/yLT9ut/1cqnKPVyxwmeqKnuA7FR9uFX9846f661q8JMHzHOoeCtWdq0UNNpDhETEGOfl6UUHllpqKw2KMxqsZmKuxCKudqKgOFwB7VAA+AOJGF2wKA4YEmRQpxJeB68/DpMhAihXfiJaWqYtR2/UAJ6DBDuUe1WGCNwx4zxX4pbIN8QoCFbHxo74Yu8uDDKJI0NM/k9caTU+kaSir6eJqingSBZQoywVQoJY/H345bqU21l3Gw6iojq1IuCpB3+dc3MPl7a4bdVyzw91WQxl0HZfIK/BXJ4iF5ebvAVa2zJdcCjrI+xWaD8Tmy0un7RTX6iCxTwXe3+7srFUuEJAx2IIYdvvwW8NIKrkI3SUH9qGuNSGrIuaBSVJI+NDKtVUab1C6Hvyj/htWaXoaCcsSqtNUM0aOMYAC1SYz8NjgufGbAHGlaqbWT6VlzJDXEqF/kebAjx619I78HS83T/2fW2KlpROKS/1+UeYB4+pBTSRKc+7Mkan+o/uN8KuXK7Z1LSZAd+lVftItrVWLMl5ZBLGkef0oosmq6Kqilo7hSNSzDcHikUSKx8eR2KkcGQZfWjVMVmyFMMPZkOaeNIlmrtPU080bwU0aybjkxqFyT48DPDabdxKu8kxU967Q8iGF5Y9Kh3mLpXSeoLxHIlFSZYfxpIo4/eARjJA7A8WFuXknKB3PGoVytlZBUQVRvTFr+TWiJoYmNnpBk/8AMjVY3b2n9W0d8/78OF9YJGWaYSy0dQfnX//QGrHD/D3pCSsCioUBvcidnj6oCAHCdyfGfJ4FxRT5bVHnMORG0XqqX2ddrPdOmhYEhS8o8YOCA7d+3+nf4FQPdpJE79Ko/p+tih1XrSzvtaWq03LV5kZAsiQvAGdJce4tvUfbA/lwOY7mCUODcOJFGvCUd5pWp7JR/wAUWH0c3Kqh0TYLrJG6rQ0N/eLrIAzzxUk9BEyhiBIiSVSnIJXwQM9uMk4qSRcKbSdVqSNOUkH9hW3cKuRaJX+j6bfvUe26lppea3PakmiCU2LXUy5yFWQXKhRJEXOyNnQg4H7j78WLrhbwe1PQkDxEVHtm+0xu7SRCSkK8tR/NFD/DFu0FVqj8vaRHqYbjWUtUj+3a8EyxJIe2TmML9+54FVryYwgn3Dt61pKmkvcJ5ie+hcGK0uUsMdspqeYkEbASBgA4Hc/YAfPD96Ql0/ooVskoKO6DmGlT9pi+o9jp6israK20MQV5qiunjp0SInavvmeNAzt4GRxPsrwFtKnFBLSTrJj4UIYvY/8ANULdtx24UNEpBMn0kwKp163rNYLxpWaor7hH9OaaRoZdyq6YT2Mh8EHyrZxwnF1IcuQ+2rufSijhAv8A4TslNkLBIIiZofHpjpbtbNSVGk6mre729qeC42yrlTbPAk5fNJOdoDttQMue+D9scMMXluVFlSgVq1B+hqzxbDlJQm8aGWFQpP1q23Oa2il09L1o2RXp2PcAZKjxn9zw26jMuTUjCyZE7/etZMvxaZUGl6CnXu1XqGz0qKPnfcY2bHz2RD8cGXDEfi5PJs0J8fLC8OyDcvIHnrQv7jRLRVvJG61EnTlpZoqVKrDtAFiu9M3TnZYdyqTIBkAlSQe4zxfW7iXba8Z/LqfiD9azq7aLd3ZXEaggfOvorfg+6mm0x6d7vaJqVpUe9W6ppZOoGi2NDUI7pKq7JEdGXBzn+XgVfs4e7Ri8ZXBIeH1FUftdbS1iFm6ncsKHzBFE9r61K6peoKhS7E4x4z8Z84HGrIS3lmBWMGVamk9ooJf8qkn7ef8AvjhOVhYkAGvqWKPRNXcI/qKWlDKfDEqM4/8A2IPCAGycqUn0rupFcFVoK87yHoKsgHsY8lfn/pYjhKm07hJHxpWZw6Ca/9Eaxq5oI5pEYDpgLuwpLdSmeMxrnIK4bB85A4FyOu9FBANRlzLE82k730o3RJKPosqptV/qZiDECfd7jJ3HHw3FcUJSY3oZDaje284tZOtSzmPSMlrSFW9hcqUK9lKNgoM4OfbxXYzbBdklXLtATRBw7dZMQcA37FQj0ot3pZvIfStRYqZgIaKijtsMkcjSiapM1FX1m5QE2s1XI3gtgAfbvkHELQF4hauaifkQK3Dh14qtlMp91Kd+s6/4qQ2gi/8AU7nHXoUCXfSNLVx9QKTIaa6UUrQxrtwZAsisWAB9p4hOOg4dboVqUPH5pIq5t0Riby1brYHyIOtTj6CeZUGj+cFxppphFIauKrQb0VZVlEJnXG4/pacfGO3FDjDSm3GbtP5TFH3DxN5hlxhw1V73yrVlYta0eprDbZIp1MdRDDiRSpG18EgnPbAPHLp3tkpncxrQulDlm6ppU5xOlWitlp01dNN09Ne4LbcLbGkTPHXiGWFJYxuVmWbKEqw+fH+1wzh7FyyEOJzJoe/3DFbe+L+GqdbujIBRIJB0I01qs/PuXlnXWK+R6hq6AdKk+msMauXYTRKW20sUO/aQqjB2+3HCn7DtWlJUIIEJ3k0YYXh3Eaktu2zTh5rURETuSeep50PzQXMbRum9S0sdNc6VGjq1jYy1CJK0kjhSZGkZZJJTjHfiAjDWmWitaSlYG9fYpbYvbuZLtB7225B8ompq558xoX0/J0QkwkpgQX3FdrJkOFztCgfPHWVgCTrTNrK+6CUkdP2rIV+JvrmK/wCrtF6QikWWre8zX2thDgiCkot1PSmQDO1ZamX25x+k/bg24bQoNu3J2ywPWgjjh9AWxYpPeK86vIdfWqqXaGGuoOV9Amyb8vvhaWnwCTvFvq5GYqoJUSJ288Sbclo3K1SFLR/I0oeuQl4WyUwcq9vga+gr+F9GZOScDEqIWpKCRtkZWMutNEQqdssCJQQc/wBuIXstSoovJ1Ha/U/f3oNe2fKq5s40V2f8UVOghjnUo/6gMHPg/vxsqbcrG+grDDppX+SW/wCnn3oRj+4PfjiWezUflXd6nHSlXDPbIkXakkXsdewP8/68S8PKWypC9HDSiZAp0cW2hpNf/9IYmnbXeluuubrfLzSPaKK32Om0vYI7eqSS3Krq4jWVzXYybZFhp4ph9N0/84bd7MERPadqEgQjmZ+UUUAoCVEmVch9aaWvA3+G7qlQoQvSwVcKLUU8xVkkiAH8FnHWlYMWBIKgYYA8P5VV9IjwMUG/XtQLPz61tT0MgmBW4Q0qqksHeR6gxJFG/SdzA0u3OPdjcuQRwu5aLmHAncLFLw98M4vA1CkEfEUTb0a6gqrdR2Grqkd6Osp5C9OruojrnqaKkj9oYCRgqM+HB3YJI4yHi9mFKSmAsKGvhqfTlW68EOKUELVqkoM/IfzVrdQVjU2utSVOFlpW0y0sMa91NTEaKklidthc9cSKw75yw4G0DtLBKUmF9oNfn/NGIKUX+ZUx2Z+gqN/TprSho+eLVkUpFBTXiSk3yK8ciRMGkWKRWAaMqr4JwAdnHcbsnDhwSYz5Zq94UxIC9dDJOTVNateTt4g1XpWgtVvus9KapYoWqKKUdeOF1GXhYn2OB4b44FEJDtqGlkhcwTzp/EXFWt+p8pBSddRp69auRZ+SN0t9vpmt3MHXVVQ9H/kVt6Fymiz7/ZJcIpSR3PlgwHbJA4KbG8smEpadzpSkbgz8atcE4rw1tvs7yxtFXM6KyqSPXIRVYucHJ6s1DVVsdRr7XlS8EUp/L6aOgppInVW2SGshhhfsoxkuuf3+Jz2IYQFSh9U8hGtalZcb4HZ2aW1YfY5zzzuqSf8A4yY+dDrtPp4smmdaRay1FDfbtVW+raaiOpLvW3XY6ylxULT1U8tDBNk9uknbt38cRLi8Yu2ewZKigjU+FZjxXxX/ALjeLTaJaabJEZEwI8NJjzrq9ZPq10Fya5W1N+1BWQxPBbulTW+N1eur60xFKW3UVOp3zVNS4ACgdvJIAJ4RhGHO3VwLa3SY68kjxrPbnEGcMYcvrpRCANuaj0A51lD1vqi/8ztR3nmVqkpHc9QVoqo6PeJPyW1qXShtsZ3KClMsmXxgNKWb57HrKW7cJsbcdxsGT+o9az26uHbxa8RuvfcOg/SOQ9OfjNO7RLxV9w0mJjK8Jq57m6SExmOgZoqSGQdj01K0owe36s8Rb0KSl3L70R67mnrBQWpvN+qfQ6CvoUfhPkTenOyyljIZwkSbgSwSKGAk5x3Q9iv/AJl/2YNBFncLVup9Q+HP4zQV7XrgLxS3RyQyD8ZosMVJ08yIMbvPx/8AXGtgRtWOqX3gCaW4LJWVCdZYg6gZ2k9/6cIVFP8AKeVPG1UFRTQFhSkHBwFYBv8AXBPjhJAma+1FKFGtbK0oE80BB/Q3ux3+MkgcdQkn3SR61xJkV//TG3NBVVtfS0kU0VHQNNTi4VDI89RFCnUkiFMm+MGWcjBJBwCT+xGchJolWBtEmo05nwFLBqOWKTppS0c7U/WZWzIxgiWOVkJAZyoB25Abx88OCRTa82XvUEDnJW1lt543OWtlMtTJPEkssTbVO+ZkUqVAxsQKq9vA754sG0B2yUiOvyqIHVNYghY8KIX6Z9SJFZ46MyJDW0d5Wnj67EPFQq9LM80US7iqGd0Clg2TuI8dsi4tYSXCsSQW9fPpW98DvnsihRAVn0HQEdKsxJrhq+q108legdvyWjgHVZqrq1F2wxRjsBgNPat2WIIOBjtwMs2pDbCEgkak9IAn60YO3o7V1UiBA8dT/ioZ9PWuLIOcUf55UPFbrys9PXMzCGWGtjeamhrYJJXyZAoG9fDbfHnFrxFYvjCCpoStOo8o2qv4VxVCcXgqhJJBnaZ0rTh6WuYVx0PUWuolk/PdNiWOE3KhzI1PH7TG1VSn+NGpj7kqDg/bjILfEG1O/wBUZF7EHafD/Na1i+Hu3LILRCjAIrRLyl1bp/Vdjoayjq6eenqoVZWieMrnaMqfcQCvjHBBbqZWqFEFNZtfsXDKT2QIWOWtLWvbBp6K31dTTRU0dQ8bMzFIyC3c7jnsDxLetLCO4B2hpGH3d+4mLicg0FAW9ZvOHTHKy23y9XqvghhoVnkSJGUzVMqK5ip6eIMDLNPJgKo78OWFu464GGkjMTHgKnvrTbtm4eJypHxrIPzh5l6w9R/NWfWmqq2qa1Us0tHpvSUtSTb7DTmUqJOgFTqXGdUDPIw3Y8e0DOpKt7fBrAW9v/cKe8vqeceFZWLi9x3ElXd0R2KVENt/pHWOp312pGu9up62ek09SqtPCYH+tuUm1FgpadepWTgbtz9TcIYRjLs/3AzCtgWmzcOarmQOs7T06mpl7LzotU6JA1PQbn+BTs5dQLe9apR0weOlDUNCkY79OJaiOKCn8AKSsag48kcRMRV2Nrmc97WfGasMNSl64hG0D0Ar6SX4ZehqfSHpv0BHIqiGrtNJOrvhmZmXY29xgMB0gM/OOCvgaw/D4SXx/wBxRV8ayH2hXwuseU2o/wBsBMeX396UUG50lt/LC8axK6rlWQjdnGe2DnzwZpLgMHagRaUkeNeGmbj1FFNIuSCVDD5Hxkf0464mRp9/c180sK9KfAVcDiWhloN5j+9OEk0h3KsjomRldAznDBvtjIJ4jBQzHLXDrX//1Bos0xVgpMLzVIw56YfqQxYB3H39ll8Z2jA/fA8NqJyYO2tRtzNRf8K3xmlWT6iGggpgoBVqiSQTLH0CdjlMkgANnb4PCkAlQHKmnCQP/GgZ+oeRl51XWMqVlW40iSBwygy/Vye4KArKjdiF7cWlsjLbkHnNVdyf+Skc4FWt5eaqmt2pr9dljhhS0zSUNTR0axwilniTdSTSRx7zIJChXc2cPgE8Z9jll29slKfcUdD+9atwtfG3u1FRkoEEeQ0n9qku/arktemqWrm6kVXeRV6ikYP0xJTUNDVUNtk2DplVauuE7D/q2Z8YzS29j/yMg1SmE+pMn5Ciu5votu1VuSV+gBj5mq6aQ1CtLzKs31tQkdDcZqZxPJhI0mZlMyh1IC5kBwc+TxeX1uo4QuB/USk+dDmGXiUYwiVDslqHxrSn6R+bFy0dDS0V8Zrno26UsaPWSzySVlgnGEDV6OGaotK+3bMmWhBG4FMEedcWsmlvqWkZbjmIgKHgeSvCvTGH3CzboGbM3yPMfzRu9D67uul7dBctI3uqo4qiGKoH08nWop2ZA24xEtBIGz2YDJHz96pCXmtUE5RS3lMOqi4SC584ry176ruZs9sqaaW60iMkLoZI6UJIwAIyVMrRg/PgeOLFi+fkApSTI3qErDLPUgkJrOh65Nc33Wl0rJLpdqicRR1MzVNfVCKnixuDOn6IoVX9h3/lwe4CtztMxEuSIAGlB/EIYDRbnKiDz8OtCisV3pYrjS2bS1Il8vtzE5WaLqra6GAAmauqJlTdKgGWkchQ2NoJHk8ftnnUm5vlZWh/9iekbAeFZm3fMsrTaYYkLfUN+SRzM8/Gd6WJ4o7dDc5WnNaY9sE1wZEWWuuRfIjp0AxDTUfkRr2VQM9x2iBS3FJbSIT0HTx8aldmG2lLUcx/c6zHh8qmH0vWo1WrqMzBRJXV0CxTSnCmVJQ8zJtwCsKbiT39zDvxUcSrKWQ2j7Bq64ZQFuLWv9OlfQk9EvqP5fRaO0jyirNRWj87tFhtMUUtLWQSU6D6dY/pK4o+6lmWXI3uApzgnJydY4Vw+7s8BYcfALOQd5JBEHrGxB0M1hHHNql3G37loKkrMpI19OoI250UqJJZIh3cqAG2ltwIwDkfBGDwT9m30FAveGhJmvWnmlpjuRtrZ7EDB++f78cLSCNq+EgynenJT3KsqYWVqlxgYzvCkD+Ywfj54hLbWDAGlTEq7ve3pjXNpuuwknkm9xI3OWx8eS3EhppBTqNaZW4ZlJ0r/9UY13uSUq1TSLEFde8zQhzGxjAaVsd2GIfb4Hu7/fgfAJ0TvRKokedNDX/Tj05cauoh2wBbNVUVMydE1FHMmyaWKrjklKlShBwpxv7N2ILjIJWPKmnDCZVyoCHOmqnufO+81EqSTs+pSzBVMhWngr2CghFJZY4k+3xxeG1eU12bKVKdKNABJ1qmU6kXGd0gJChqdoFWI5VaI1zq3XWv9R6ZppZtOyfmzPTxwCd70srzS0tNDFlemzCIMrt7kOMKT24K+HPY9xTxTgrjjFvH4ZvOM25O+UeJHKmrz2hYRg2NAKdHYOuZSRpodAddxNKHMO+XS4Tss9FUoae1Wm2yRRRSPDTmJv8AiREpAcLTrvTwBlf24yx3CFYa6oXACV5jvoQdoPQ76f4rUl4mq/aCmZU32aZjUehHKvKLSVsutqo6tjTUckcSyxVPXamjMrszjbK7/T0s0ftwrsvf44HXLtTKyyQVeETI+tWCLFt5kPpISeRmNeXl60TD0qc2bnaaKh07qCQzT2zZDT1E5pZfraNgEaKWQTfxFliODjtn/XMuJ8KaU4X2PdPLXQ/4rWuF8ZeRbJt7ggrTpMjUftRkOTvOr8nVtMy1jGyyhamzxySdVqESj30CkuzCCNwemPCr28AcATtqtA70kUbKuW3wHET2g+dLXMHmJAJJKQOd1QhdO+Sc/wCuMdv6/wB3rW1zQeY1pCn1E6n7+/voLb1G6ZuGraC7VzpMIapjQRFUYiMOje/2jIy5GDwdYNcJtik8wfjQZjtsblKwNUkRHShkVtyg5Q6Z/wAJWurjr9c19Ybderuib1tVHXSs601K+SJqtYnG4gkKx7nIxxoLbbmLv/jHxlsEiUp/URzPhNZY+61gTBsrYhV+owtX6QTsOtd+qpKSy09msRlaOWj03UVVWx/iyG418UUmWZnJMqioIJzkHiBbJK3VPR3S5HoKs7g9lboYnvBkk+ZirDemG5w09fLe5RFDQ2Ox9VZXGVQwNtkkd2xlpphhmA7/AMuKPHLfPcIbJBzOaz0q9wC4Ddk44BqG6Ml6TNf6oqdT0OutH6ht1m1faIOm1vr0Y2rU9sedv+GqHWUxyRupZSsilSW8jtx6O9kOG/jVv4JmR2mXtGm1wEOoP9xIP6ogjx1rHvaJcpRbt4ioL7MnI4obtqk5FeXL1jy1oekL1laI5r0dDoqsvUVt1VQxRUNw01cJlW6acuaDpNbxIzt+YWWqdD9LOHZo89N/g8EXFHCFzgEX9v8A1MIcVGYd4tKn+2uI56JNZdbXyb1amVDLfIEkclpH50j96IcASdoXex/6kGP3Hz/fgOp4xEmu5KZVjLGMA7e47/6AdvHHKRnV6U2KqJXbumO/wcf0758cfGQfCpKQkpr/1hd6gokutLPSTVBjgnl+mleLCtmNWeQqwyT7SSCcdlz8cUbZ/MDBolXtNNrnleRc7Vf5ITGtPDbbRDQIpIWnpoIVggA7hcbUGTju2TxKtGu+lBqHdLOUz0ofXJf0u695o3XmNzjjsVY+k7beZbJDeWp2+nq7jGerXR00rdpWj6yl9ucbgDx7A9iHsyuOI0Lx5wRaohtBIBzEaqgHpMTWJcfcU22G3DeFhX/IIzKAPKdJjrH3zPV+GR6TKPV2iuYl/MD0V6stwgpbLVT0CVVJPMscs8/1cDFU6BkwpHbB7gg4PHrizw2x4Ns22HUgh5ZzflmOfiRWHY/iTl7cgpJygTVQfUT6cbhqPU2suYPKXTtpt9XZ9RXaw8xtCR0YeghvtvkRZ66hpZJZahaC7QSCVtp3RNIQFHfPlj/UT/p8bxiwc4z4ObUWAZuGm9FJMSXEgTvoVQPGN69D+xn2qO4dcNcP448M5SOyWvVK0nZCifgPgKHxUaNRq64y6ZpltFzTCaj0ZcZIpKF41ATNIVdyIpATskA3IO0i49x/Oy8sbvD3fw2IBedBhK4hSfPx6jnXrZi6s71Kn7ApQtQ7zZ1Qryj7HMUjW3Tcun71DW0ElZSxwyrJU2SvSWKutUhOf+GngZvzG1N4DRligwQQPEe4CbpgpdAJ/UBv5jcHrX1kpdncAtlSRvlV+XyVsU8xRHORWp6W51cUX51UbunCej9fN1ElHlEMw6ilMZGf1Z88Z/i2HwDkFaThmKgRmkpPyq4eqaa53ewR3O0TPUXax/xzSyM++rpV/wCbEO2cuvj4z8/els2w29lX7p0NXryy4jM373Knbyst2keblhe23Vo06TGOqtsirFMKiPCss+D1MxvnIJGfkHi4/D9mqQap0uqWstujnvQ2/W16WLdy2uZ1Jp9N9DKFqIowqBkqUk6pIyDsDg7SfgHgrwXG3Y/BOmRyJ6UM8Q8O262/xzAAdBEjr9/fgKy/ajq667Xipn6genmkh2OzOUWSFAkqk/qUbfv2xwUt22RltUd1SdfjWfXV4pVy4n8yTA+VXE5T1UNv5Marue1uqaKhs4dWMaiWvuEDNuK9iAHP8/8Acbv2v/VGxumZ+ANFOFvJOEuZPfiD6mrM+mDnaNE65tqVzfVW9nhMkKTmmmEAjiSojoZWYwSSlSr9N43yR2PGg8K467gl9b3zRPa2zmZMHUDmnxBGkUJ4zYs37D1k8B2VwjKdNJjQ+EHyotl05n1XLLVumOf2gL5UW362qgqmpJuvL9clEokultrJAGhk6kIDmMkOpViDkdvYiry1v7dOJW+V3AMWayrR+UOEdPymeekK2rz4qwdZuF4fcSjFbFUoUN1IB+Yy+citmPps5zW/m/yX0BzBhk6x1DpygrpGG7eZTAglVhJtkDo4IORk8ecsQsncMxF7Dn9HGlkCeafyn1FXLqUPJFw0ZbWAfXmPjU11V/RUIjU9x5I8f+DiL40yGyNzrTfW5rKzFiB8+5fOfnzx2nPKv//XGOq/RgyzxJiSo6QVp0YxmaGaF6mRF3NBGpPyPccqMfFOEE9IokCs2+1RLzcDCyXKnj/jSVEVnoYRHuVZ2lrTDAFHZiNuQT5x4zxcYYx2twlI95RqtvFwgnZIrRMnpmh5GehvlLoKis8kdfFpClvGphHSQyTTan1hG18uElV7ULtDPWinDMMrHEBkEDj9QvYkWsPw5rBmiiW2EmPHdfhMk14k4tvVYhxBc3zp7inSAeiQcoHlA+dWo9DGgqLlZoGMVVItLHqpnqJSEDKambdI+1hgqpYkjI/bPji29qd0cRuEW1of6ltqR571R2yx2pWvVtQiTVBuc+iZuUnrT1A7yxU+huedqUNQGmNRQDUtvXpGeaF3UQ1NfTuAsiFS5THBbwXiDd9hQZf7yXWoIJjvpEGdxqnSD0qRcLJtkqH/ALhhe4/STpB8DQhfW1yDn5ccxae7UUMMYqGM1ouaBo5Jo5gZnpKqaKKMzxRyMAFf2hiMkHvx4u/1Bex2xDxxvCmwixeUdY1aWTqFZd2iduaCdO7IHpb2We0u4vGE2V6om9aTGp/uJGxHRwDfkrz1qodNebfdKEW+tpo6C4UzkolaXNKJS23fC4bdSCZiTgHZ8rge0eB8ewW6wS7XbvoUhST3hHwI/UCNQedeqMIxm3xa2SSoKJ2O48RPI+FeNpqqvTt6iulnfozwTxPX0izOWRWYhXaJjGjwSkkK+QuO4JOARa9te2Y0IKTRTheIpaf7JyQsHnz+O9Ey5X6+o7zRUUs8hWp6KdZJTtZSwHtYDvIsi5IOMEHgQctw2uFCFCtAYvJSCn3DTxobR+Q6tq9T6ekejjrXV6qnhbbTzMe7M6L2Dhvn5zxHLi2xlIM1NAbcV2giaj31Iaik1bpWroLiEMq00uDIRknYQNmSQdpwccS8PQBcBRG9V+Ju5rVSI0AoAGtLc9j1OYmBSOu6odm/SzK+yPcMY2SKpA/nxvNjh7juFthxMKjMPFPWvN+KX6GcZcKDKDp5H7+FWq0DcIYeQGroVwJE1np1HCkEileRWTIfGCekQPjI4AMUYLOKtoVvlVR3gr6XcOdWk6Zk6U2rHdZaSso6hakpLGsVXDIu5UZqSoajq45GTLIvS2sSAcY+eJ1vKSFJMK61HuJUD1j0IB1or2mNZXe/cl6mneqN8NL9JdKKE1jqYLjak6hEiwRzAtW0gKMxXdIMjv4O6+zvidDWD3HD2IFP4Z5WZpR07Nwa6dAr4A1nnFeDqdvGcYtATctJhQA99B5a8x+1axvwnefunLtyO0Fo6tqEtpqren5BTyVHUjikeZo5bSHk2vGYKgmNNwAyMADIAPeM+FrnEsHa4mZBVeNJyO5QYUlI97lrGviOtZo3ftMX68PGjCjmR4Ty8p08D4UZmeaPGAACQexP6j/fHnjH5q1A5VxMZVUEdPufgg9v3x24+866ElWid6//0Bl1dUaZaaNIYYlVnR2iX+JLJg93kfMhQd/nPfitaAJHQ1fOLypzVJnpu5DUXqV9QWkOX9/uUlDpu2UlPrTU5id0r7la9MVsFU9st7rFJHFV3CSdYzI+BGhZhk4U6x7LOGW+JOJW7Z9eW1aSXFdVBP5R0kxJ6VnvHuPOYFga7hpOZ90htPQFWknyrXlzk0XRXvR02n5EhhpYbdAtJKm9pKZaeNViRdwOUSOEKO+cfP29gcEYurDsWRct5pC8pTyI+/vr5OxNoq9+J3phacs0du0dQ0EeyE27o08LQbtjCMRsjkHptGWLdwMgfH34JMTvDcY2t4yQ6Coz48vGBVWBDQjeqoerzRVr5h6dttVVxRUd8s9VSVtrukCBZaOamqR/EjYAvukcLkZ8d85ABMeBgbda2EmWgrMJ3mvi8d+qdaFT6trL/jDR1uF1l319BQgRVpLyOTFGS4YEquGaI9wuT2z85KeK8NtsRw1y3UlManUSPHTxqywG7csr1JYJGtAl5l6bntMEl/tdWITSyJHPCzP/ABMzdMjG1xJETj2kr2+ew48B+2z2a2SMOOM2ikpLYOhGsDdOxlPNJJkdIr1F7PeLbpV1+BelRVGvyB3366a9aS9N3ae7UgidRBcaeA1FFVIzNGUCMXpaqM4LQOsZBxnvg+e48PXqBaKKkatqiR58/OvUGHk3zQC/7yRIV5cvKrC8otX1U9NTvA08PTnlij3Mr9N0YiaE9x1KV2BxnBGc4HA9esIU4Qen3/mjDC7tamw2rrVzNKa8mnpys0cvsBRlXYV3ADJUllJHb54oHmMqt6I0vrAkcqh7mffJtV3SLSlIDRvUh3qKybDdOmQbpuiqFi05TIUHaufkca77HfZ0rj/iljCO2Syye8smZyp1ISADJIECSB41lntQ49/6TwB6+DS3HYhIEASdp8PQ+VD+9QnL+gR4quApGKZFihyvvVIQI1GdpGSy7if+o8exvanwNh+Etsv4ZDbTLSGkpjdKQEiYjfcnQzXlngviW7xNbovpWtSysmeatdD4bREU1eXJl/8ATfmRRysJISdPVapkgJNBJMFYdvJKf68ePON7VDGJ27ifelQPTbl4edei+Cbkqs7poyUwkifWkOzVhBlg2Bmor7cKZC3g09dCkjx5znA3H+vFdkAyH9SAPhzqat2VKA3bcMdIOsVfj0t36rcTWxApCF49sxaSmkMZdUWWHdhoy6EEdvY5H83Grpy2dSkE9mowY5ajUeNSbdCbhskjvpkj60Z7ldrOTl1oWy1ujhWWWOO232/25aapdXt1bG0F3pzAgk2AU9woMr3/AEH75z7z9m1ycd4WVh+IDM6htSVHkrIBHxB18q8z8c2beF44m6tv7C1ghPMZ9/gRp4VrI9PvMWt5v8leW3M2pjamq9V6UtF2q4JdoZauWmjSqcCNpEAknDMO57HjzhxNhiMHx24sWjLSFd3wB1A9KubW5L1ohxQ75GtS3NcapNoxGc5+W+O2T/Pih3qU25zFf//Z',
    address: 'GD5Q7KRFQC3Q7YQPYAZ4G65B65EBCJOVSHPE65MIYQMCLUQULQDKBLUX',
    balance: '20',
}, {
    name: 'Kid name 2',
    dob: '01/01/2010',
    photo: null,
    address: 'GAG6MT2Q4II2JHZI67QP2FHBTV7WAQ3NWVKVASDQHR7DPSP7H3HBVEQA',
    balance: '17',
}];

storiesOf('Balance')
    .add('default view', () => (
        <Balance {...props}/>
    ))
    .add('with kids', () => (
        <Balance {...{
            ...props,
            kids
        }}/>
    ))
    .add('with kids 17 balance', () => (
        <Balance {...{
            ...props,
            kids,
            balance: '17',
        }}/>
    ))
    .add('with kids 1000 balance', () => (
        <Balance {...{
            ...props,
            kids,
            balance: '1000',
        }}/>
    ))
    .add('first time', () => (
        <Balance {...{...props, firstTime: true}}/>
    ))
    .add('loading', () => (
        <Balance {...{...props, exchange: null}}/>
    ))
    .add('error', () => (
        <Balance {...{...props, exchange: null, error: new Error('Network error')}}/>
    ));
