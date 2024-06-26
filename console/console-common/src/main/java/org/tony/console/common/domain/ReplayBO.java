package org.tony.console.common.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

/**
 * {@link ReplayBO}
 * <p>
 *
 * @author zhaoyb1990
 */
@Getter
@Setter
public class ReplayBO extends BaseBO {

    private Date gmtCreate;

    private String appName;

    private String ip;

    private String environment;

    private String repeatId;

    private String traceId;

    private String response;

    private Boolean success;

    private Long cost;

    private ReplayStatus status;

    private RecordDetailBO record;

    private List<MockInvocationBO> mockInvocations;

    private List<DifferenceBO> differences;

    /**
     * 类型
     */
    private int type;

    /**
     * 测试用例id
     */
    private String caseId;

    @Override
    public String toString() {
        return super.toString();
    }
}
