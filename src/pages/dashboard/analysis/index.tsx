import type { AnalysisData } from './data.d';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import PageLoading from './components/PageLoading';
import WrapContent from '@/components/WrapContent';
import { GridContent } from '@ant-design/pro-layout';
import IntroduceRow from './components/IntroduceRow';
import { useRequest } from 'umi';
import { fakeChartData } from './service';
import styles from './style.less';

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Analysis: FC<AnalysisProps> = () => {
  const { loading, data } = useRequest(fakeChartData);
  return (
    <WrapContent>
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Suspense>
      </GridContent>
    </WrapContent>
  );
};
export default Analysis;
